import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useMutation } from '@tanstack/react-query';
import {
  Input,
  Button,
  Textarea,
  Badge,
  Label,
  ImagesCarousel,
} from '@/components';
import { Hero } from '@/types';
import { heroesAPI } from '@/api';
import { PlusIcon, XIcon } from 'lucide-react';

interface HeroFormProps {
  initialValues?: Hero;
  onSubmit: (data: Hero) => void;
  onCancel: () => void;
  mode?: 'create' | 'edit';
}

export const HeroForm: React.FC<HeroFormProps> = ({
  initialValues = {},
  onSubmit,
  onCancel,
  mode = 'create',
}) => {
  const [nickname, setNickname] = useState(initialValues.nickname || '');
  const [realName, setRealName] = useState(initialValues.real_name || '');
  const [originDescription, setOriginDescription] = useState(
    initialValues.origin_description || ''
  );
  const [superpowers, setSuperpowers] = useState<string[]>(
    initialValues.superpowers || []
  );
  const [newPower, setNewPower] = useState('');
  const [catchPhrase, setCatchPhrase] = useState(
    initialValues.catch_phrase || ''
  );
  const [images, setImages] = useState<string[]>(initialValues.images || []);
  const [imageUrl, setImageUrl] = useState('');
  const [searchResults, setSearchResults] = useState<Hero[]>([]);

  const [debouncedNickname] = useDebounce(nickname, 500);

  const { mutate: searchMutate, isPending } = useMutation({
    mutationFn: heroesAPI.getSearchQueryHero,
  });

  useEffect(() => {
    if (mode === 'create' && debouncedNickname.length > 1) {
      const controller = new AbortController();
      searchMutate(
        { name: debouncedNickname, signal: controller.signal },
        {
          onSuccess: setSearchResults,
          onError: () => setSearchResults([]),
        }
      );
      return () => controller.abort();
    } else {
      setSearchResults([]);
    }
  }, [debouncedNickname, mode, searchMutate]);

  const handleAddPower = () => {
    const trimmed = newPower.trim();
    if (trimmed && !superpowers.includes(trimmed)) {
      setSuperpowers(prev => [...prev, trimmed]);
      setNewPower('');
    }
  };

  const handleRemovePower = (p: string) =>
    setSuperpowers(prev => prev.filter(x => x !== p));

  const handleAddImageUrl = () => {
    const trimmed = imageUrl.trim();
    if (trimmed && !images.includes(trimmed)) {
      setImages(prev => [...prev, trimmed]);
      setImageUrl('');
    }
  };

  const handleRemoveImage = (img: string) =>
    setImages(prev => prev.filter(x => x !== img));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...initialValues,
      nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers,
      catch_phrase: catchPhrase,
      images,
    } as Hero);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 w-full md:w-[375px]">
          <ImagesCarousel
            mode={mode}
            images={images}
            onDelete={handleRemoveImage}
          />
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <Label htmlFor="nickname" className="mb-1 block">
              Nickname
            </Label>
            <div className="relative">
              <Input
                id="nickname"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                placeholder="Nickname"
                className="h-11 w-full"
              />
              {mode === 'create' && isPending && (
                <div className="absolute top-2 right-3">
                  <span className="text-muted-foreground">Loading…</span>
                </div>
              )}
            </div>
            {mode === 'create' && !isPending && searchResults.length > 0 && (
              <ul className="border rounded shadow mt-1 max-h-40 overflow-auto">
                {searchResults.map(h => (
                  <li
                    key={h._id}
                    className="px-3 py-1 cursor-pointer"
                    onClick={() => {
                      setNickname(h.nickname);
                      setRealName(h.real_name);
                      setOriginDescription(h.origin_description);
                      setCatchPhrase(h.catch_phrase);
                      setSuperpowers(h.superpowers);
                      setImages(h.images);
                    }}
                  >
                    {h.nickname}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <Label htmlFor="real_name" className="mb-1 block">
              Real Name
            </Label>
            <Input
              id="real_name"
              value={realName}
              onChange={e => setRealName(e.target.value)}
              placeholder="Real Name"
              className="h-11 w-full"
            />
          </div>

          <div>
            <Label htmlFor="origin_description" className="mb-1 block">
              Origin Description
            </Label>
            <Textarea
              id="origin_description"
              value={originDescription}
              onChange={e => setOriginDescription(e.target.value)}
              placeholder="Describe origin..."
              className="h-24 w-full"
            />
          </div>

          <div>
            <Label htmlFor="superpower" className="mb-1 block">
              Superpowers
            </Label>
            <div className="flex gap-2">
              <Input
                id="superpower"
                value={newPower}
                onChange={e => setNewPower(e.target.value)}
                placeholder="Add superpower"
                className="h-11 flex-1"
              />
              <Button size="lg" type="button" onClick={handleAddPower}>
                <PlusIcon />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {superpowers.map(p => (
                <Badge
                  key={p}
                  variant="outline"
                  onClick={() => handleRemovePower(p)}
                  className="cursor-pointer flex items-center gap-1"
                >
                  {p} <XIcon className="w-3 h-3" />
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="catch_phrase" className="mb-1 block">
              Catch Phrase
            </Label>
            <Input
              id="catch_phrase"
              value={catchPhrase}
              onChange={e => setCatchPhrase(e.target.value)}
              placeholder="e.g. “With great power comes...”"
              className="h-11 w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center w-full gap-2">
            <div className="w-full md:w-2/3">
              <Input
                id="image"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder="Image URL"
                className="h-11 w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-1/3">
              <Button
                type="button"
                size="lg"
                onClick={handleAddImageUrl}
                className="w-full md:w-auto"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Hero</Button>
      </div>
    </form>
  );
};

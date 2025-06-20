import { useEffect, useState } from 'react';
import { heroesAPI } from '@/api';
import { useDebounce } from 'use-debounce';
import { Input } from '@/components/ui/input';

export const CreateHeroPage = () => {
  const [name, setName] = useState('');
  const [debouncedName] = useDebounce(name, 500);
  const [heroes, setHeroes] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debouncedName.trim()) return;

    const fetchHeroes = async () => {
      try {
        setLoading(true);
        const result = await heroesAPI.getSearchQueryHero({
          name: debouncedName,
        });
        setHeroes(result);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, [debouncedName]);

  return (
    <div className="space-y-4">
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter superhero name"
      />

      {loading && <p>Loading...</p>}

      {heroes.map(hero => (
        <div
          key={hero.id}
          className="cursor-pointer hover:bg-muted p-2 rounded"
          onClick={() => {
            console.log('Selected:', hero);
          }}
        >
          <p>{hero.name}</p>
          <img src={hero.image.url} className="w-12 h-12" />
        </div>
      ))}
    </div>
  );
};

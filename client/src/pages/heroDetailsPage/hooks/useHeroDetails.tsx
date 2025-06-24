import { heroesAPI } from '@/api';
import { QUERY_KEYS } from '@/constants';
import { Hero } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataNotFound, HeroCardSkeleton } from '@/components';
import { toast } from 'sonner';

export const useHeroDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isEdit, setIsEdit] = useState(false);

  const {
    data: hero,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.HEROES, id],
    queryFn: () => heroesAPI.getHeroById({ id: id! }),
    enabled: !!id,
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: handleDelete } = useMutation({
    mutationFn: () => heroesAPI.removeHero({ id: id! }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.HEROES] });
      toast.success('Hero was deleted');
      navigate(-1);
    },
    onError: () => {
      toast.error('Failed to delete hero');
    },
  });

  const { mutate: handleEdit } = useMutation({
    mutationFn: (data: Partial<Hero>) =>
      heroesAPI.updateHero({ id: id!, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.HEROES, id] });
      setIsEdit(false);
      toast.success('Hero updated successfully');
    },
    onError: () => {
      toast.error('Failed to update hero');
    },
  });

  const toggleEdit = () => {
    setIsEdit(prev => !prev);
  };

  const renderFallback = () => {
    if (isLoading) {
      return <HeroCardSkeleton />;
    }

    if (error || !hero) {
      return (
        <DataNotFound
          title="Hero Not Found"
          helperText="We could not find this character. It may not have been created yet or may have been deleted."
          action="goBack"
        />
      );
    }
  };

  return {
    hero,
    handleDelete,
    handleEdit,
    toggleEdit,
    isEdit,
    renderFallback,
  };
};

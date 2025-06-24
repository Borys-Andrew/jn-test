import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { heroesAPI } from '@/api';
import { Hero } from '@/types';
import { QUERY_KEYS } from '@/constants';
import { Paths } from '@/settings';
import { toast } from 'sonner';

export const useCreateHero = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createHero } = useMutation({
    mutationFn: (data: Hero) => heroesAPI.createHero({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.HEROES] });
      toast.success('Hero created');

      navigate(Paths.index);
    },
    onError: () => {
      toast.error('Failed to create hero');
    },
  });

  const handleCancel = () => {
    navigate(-1);
  };

  return { createHero, handleCancel };
};

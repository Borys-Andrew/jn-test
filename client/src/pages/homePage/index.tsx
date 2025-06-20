import { useSearchParams } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components';
import { heroesAPI } from '@/api';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 5;

  const { data, isLoading } = useQuery({
    ...heroesAPI.getHeroListQueryOptions({ page, limit }),
  });
  console.log('🚀 ~ HomePage ~ data, isLoading:', { data, isLoading });

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage), limit: String(limit) });
  };

  const handleLimitChange = (newLimit: string) => {
    setSearchParams({ page: '1', limit: newLimit }); // скидаємо на першу сторінку при зміні ліміту
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-7">
      <p>Here will be a list of Heroes with pagination</p>

      {/* Select для ліміту */}
      <div className="flex items-center gap-2">
        <span>Heroes per page:</span>
        <Select value={String(limit)} onValueChange={handleLimitChange}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Select limit" />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 20, 50].map(value => (
              <SelectItem key={value} value={String(value)}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Кнопка переходу на наступну сторінку */}
      <Button onClick={() => handlePageChange(page + 1)} variant="secondary">
        Next Page
      </Button>
    </div>
  );
};

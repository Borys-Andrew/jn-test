import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';
import { cn } from '@/utils';

type PaginationHeroesProps = {
  limit: number;
  currenPage: number;
  totalPages: number;
  onHandleLimitChange: (newLimit: string) => void;
  onHandlePageChange: (newPage: string) => void;
};

export const PaginationHeroes: React.FC<PaginationHeroesProps> = ({
  limit,
  currenPage,
  totalPages,
  onHandleLimitChange,
  onHandlePageChange,
}) => {
  return (
    <div className="flex gap-2 bottom-0">
      <div className="flex items-center gap-1.5">
        <p className="w-fit">Limit:</p>
        <Select
          value={String(limit)}
          onValueChange={value => onHandleLimitChange(value)}
        >
          <SelectTrigger>
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

      <Pagination className="ml-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              isText
              onClick={() => onHandlePageChange(String(currenPage - 1))}
              className={cn(
                currenPage === 1 && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pg => (
            <PaginationItem key={pg}>
              <PaginationLink
                isActive={pg === currenPage}
                onClick={() => onHandlePageChange(String(pg))}
              >
                {pg}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              isText
              onClick={() => onHandlePageChange(String(currenPage + 1))}
              className={cn(
                currenPage === totalPages && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

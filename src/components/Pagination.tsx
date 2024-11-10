import * as PaginationShad from '@/components/ui/pagination';
import { useSearchParams } from 'react-router-dom';

interface PaginationProps {
  total: number;
  next: {
    offset: string;
    limit: string;
  } | null;
  previous: {
    offset: string;
    limit: string;
  } | null;
}

function Pagination(props: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <PaginationShad.Pagination>
      <PaginationShad.PaginationContent>
        <PaginationShad.PaginationItem>
          <PaginationShad.PaginationFirst href={`/moves?offset=0&limit=20`} />
        </PaginationShad.PaginationItem>
        <PaginationShad.PaginationItem>
          <PaginationShad.PaginationPrevious
            href={
              props.previous
                ? `/moves?offset=${props.previous.offset}&limit=${props.previous.limit}`
                : `/moves`
            }
          >
            Previous
          </PaginationShad.PaginationPrevious>
        </PaginationShad.PaginationItem>
        <PaginationShad.PaginationItem>
          <PaginationShad.PaginationNext
            href={
              props.next
                ? `/moves?offset=${props.next.offset}&limit=${props.next.limit}`
                : undefined
            }
          >
            Next
          </PaginationShad.PaginationNext>
        </PaginationShad.PaginationItem>
        <PaginationShad.PaginationItem>
          <PaginationShad.PaginationLast
            href={`/moves?offset=${props.total - 20}&limit=20`}
          />
        </PaginationShad.PaginationItem>
      </PaginationShad.PaginationContent>
    </PaginationShad.Pagination>
  );
}

export default Pagination;

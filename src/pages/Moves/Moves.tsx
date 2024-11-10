import { BackToTop } from '@/components/BackToTop/BackToTop';
import MoveCard from '@/components/MoveCard/MoveCard';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner/Spinner';
import useMoves from '@/hooks/useMoves';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Moves() {
  const { getMoves, moves, total, previous, next, isLoading } = useMoves();

  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (!searchParams.get('offset') && !searchParams.get('limit')) getMoves();
    getMoves(
      Number(searchParams.get('offset')),
      Number(searchParams.get('limit')),
    );
  }, [searchParams]);

  return (
    <div className="w-full space-y-4 px-4">
      {moves ? (
        <div className="grid w-full grid-cols-2 place-items-center items-center gap-4 md:grid-cols-3 lg:grid-cols-5">
          {moves.map((move) => (
            <MoveCard key={move.name} move={move} />
          ))}
        </div>
      ) : (
        <div className="flex h-full min-h-96 w-full flex-1 items-center justify-center">
          <Spinner size={48} />
        </div>
      )}

      <div>
        <Pagination total={total} next={next} previous={previous} />
      </div>
      <BackToTop />
    </div>
  );
}

export default Moves;

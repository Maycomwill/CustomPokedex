import { BackToTop } from '@/components/BackToTop/BackToTop';
import MoveCard from '@/components/MoveCard/MoveCard';
import Pagination from '@/components/Pagination';
import useMoves from '@/hooks/useMoves';
import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Moves() {
  const { getMoves, moves, total, previous, next } = useMoves();

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!searchParams.get('offset') && !searchParams.get('limit')) getMoves();
    getMoves(
      Number(searchParams.get('offset')),
      Number(searchParams.get('limit')),
    );
  }, [searchParams]);
  return (
    <div className="w-full space-y-4 px-4">
      <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-5">
        {moves && moves.map((move) => <MoveCard key={move.name} move={move} />)}
      </div>
      <div>
        <Pagination total={total} next={next} previous={previous} />
      </div>
      <BackToTop />
    </div>
  );
}

export default Moves;

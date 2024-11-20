import { CaretLeft, CaretRight } from 'phosphor-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../ui/button';

function NavButtons() {
  const params = useParams();
  let generation = params.generationid;
  let navigate = useNavigate();

  if (generation == '1') {
    return (
      <div className="mb-4 mt-6 grid grid-cols-3 place-items-center items-center justify-center gap-4">
        <div />
        <Button variant={'destructive'} onClick={() => navigate('/')}>
          Home
        </Button>

        <Button onClick={() => navigate(`/pokedex/${Number(generation) + 1}`)}>
          {`Geração ${Number(generation) + 1}`}
          <CaretRight size={24} />
        </Button>
      </div>
    );
  } else if (generation == '9') {
    return (
      <div className="mb-4 mt-6 grid grid-cols-3 place-items-center items-center justify-center gap-4">
        <Button onClick={() => navigate(`/pokedex/${Number(generation) - 1}`)}>
          <CaretLeft size={24} />
          {`Geração ${Number(generation) - 1}`}
        </Button>

        <Button variant={'destructive'} onClick={() => navigate('/')}>
          Home
        </Button>
        <div />
      </div>
    );
  } else {
    return (
      <div className="mb-4 mt-6 grid grid-cols-3 place-items-center items-center justify-center gap-4">
        <Button onClick={() => navigate(`/pokedex/${Number(generation) - 1}`)}>
          <CaretLeft size={24} />
          {`Geração ${Number(generation) - 1}`}
        </Button>

        <Button variant={'destructive'} onClick={() => navigate('/')}>
          Home
        </Button>
        <Button onClick={() => navigate(`/pokedex/${Number(generation) + 1}`)}>
          {`Geração ${Number(generation) + 1}`}
          <CaretRight size={24} />
        </Button>
      </div>
    );
  }
}

export default NavButtons;

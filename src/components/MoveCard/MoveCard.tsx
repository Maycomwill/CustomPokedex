import { Text } from '../Text/Text';
import { NamedAPIResource } from '../../interfaces/apiInterfaces';

import { useNavigate } from 'react-router-dom';

function MoveCard({ move }: { move: NamedAPIResource }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex h-24 w-full items-center justify-center rounded-md bg-gray-700 px-5 py-6 text-center transition-all duration-200 ease-in-out hover:bg-gray-600"
      onClick={() => navigate(`/moves/${move.name}`)}
    >
      <Text size="md" transform="capitalize">
        {move.name.split('-').join(' ')}
      </Text>
    </div>
  );
}

export default MoveCard;

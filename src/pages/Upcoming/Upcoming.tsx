import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function Upcoming() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-start space-y-2">
      <h1 className="text-3xl font-semibold">Em breve...</h1>
      <p className="w-[80%] break-words text-center text-gray-300">
        Estamos trabalhando para adicionar essa funcionalidade o mais breve
        possível
      </p>
      <div className="pt-4">
        <Button onClick={() => navigate('/')} variant={'link'} className="">
          Voltar
        </Button>
      </div>
    </div>
  );
}

export default Upcoming;

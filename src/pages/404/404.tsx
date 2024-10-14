import { Button } from '@/components/ui/button';
import { TextStyled } from '../../components/Text/styles';
import { useNavigate } from 'react-router-dom';

export function BlankPage() {
  const navigation = useNavigate();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
      <TextStyled size="lg">404</TextStyled>
      <Button onClick={() => navigation('/')} variant={'ghost'}>
        Home
      </Button>
    </div>
  );
}

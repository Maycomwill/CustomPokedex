import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function BlankPage() {
  const navigation = useNavigate();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl">404</h1>
      <Button onClick={() => navigation('/')} variant={'ghost'}>
        Home
      </Button>
    </div>
  );
}

import { Loader2Icon } from 'lucide-react';
import colors from 'tailwindcss/colors';
interface SpinnerProps {
  color?: string;
  size?: number;
}
function Spinner({ color, size }: SpinnerProps) {
  return (
    <div className="animate-pulse">
      <div className="animate-spin">
        <Loader2Icon
          size={size ? size : 24}
          color={color ? color : colors.emerald[500]}
        />
      </div>
    </div>
  );
}

export default Spinner;

import clsx from 'clsx';
import LoadingGif from '../../assets/loading.gif';
import colors from 'tailwindcss/colors';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}
export default function Loading({
  size = 'md',
  color = colors.emerald[500],
}: LoadingProps) {
  return (
    <div>
      <img
        className={clsx(color, {
          'size-4': size === 'sm',
          'size-6': size === 'md',
          'size-16': size === 'lg',
        })}
        src={LoadingGif}
        alt=""
      />
    </div>
  );
}

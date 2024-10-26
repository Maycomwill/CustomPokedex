import clsx from 'clsx';

interface SpacerProps {
  direction?: 'horizontal' | 'vertical';
  color?: 'primary' | 'accent' | 'gray';
}

export function Spacer({
  direction = 'horizontal',
  color = 'primary',
}: SpacerProps) {
  return (
    <div
      className={clsx(
        'rounded-full',
        {
          'my-4 h-px w-full': direction === 'horizontal',
        },
        {
          'mx-4 h-full min-h-16 w-px': direction === 'vertical',
        },
        {
          'bg-primary-500': color === 'primary',
          'bg-accent-500': color === 'accent',
          'bg-slate-900': color === 'gray',
        },
      )}
    />
  );
}

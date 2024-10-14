import { Text } from '../Text/Text';

export function Footer() {
  return (
    <div className="flex w-full items-center justify-center py-4">
      <Text color="white" size="xsm">
        Criado por{' '}
        <a
          href="https://github.com/maycomwill"
          target="
  _blank"
          rel="noopener"
        >
          <Text color="white" size="xsm">
            Maycom Willams
          </Text>
        </a>{' '}
        com 💚
      </Text>
    </div>
  );
}

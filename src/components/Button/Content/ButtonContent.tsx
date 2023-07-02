import { Text } from "../../Text/Text";

interface ButtonContentProps {
  text: string;
}

export function ButtonContent({ text }: ButtonContentProps) {
  return <Text>{text}</Text>;
}

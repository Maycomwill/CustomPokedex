import { CircleNotch } from "phosphor-react";
import { Container } from "./styles";
import LoadingGif from '../../assets/loading.gif'

interface ILoadingProps{
  color: string;
  size: number;
}

export function Loading({color, size}: ILoadingProps) {
  return (
    <Container>
      <div>
        <img src={LoadingGif} alt="" />
      </div>
      {/* <div className="spinner">
        <CircleNotch size={size} color={color} />
      </div> */}
    </Container>
  );
}

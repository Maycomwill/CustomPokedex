import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: spin;
    animation-duration: 900ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin{
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }
  }
`;

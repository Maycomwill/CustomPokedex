import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  min-width: 100vw;
  padding: 1.2rem 2.4rem;
  margin-bottom: 1.6rem;
  overflow-x: hidden;

  #logos{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #maycomLogo{
    rotate: 0deg;
    transition: all 150ms ease;
  }

  #maycomLogo:hover{
    rotate: -180deg;
  }
`;


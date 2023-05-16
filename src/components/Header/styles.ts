import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 1.2rem 2.4rem;
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


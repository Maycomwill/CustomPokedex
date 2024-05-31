import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 0rem 2.4rem;
  margin: 1.6rem 0rem;
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


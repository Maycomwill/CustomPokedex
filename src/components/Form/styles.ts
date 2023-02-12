import { shade } from 'polished';
import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: ${shade(0.4, `${theme.colors.gray[800]}`)};
    width: min(80rem, 87%);
    padding: 3.2rem 1.6rem;
    border-radius: 1.6rem;
    box-shadow: 0 0 4.8rem rgb(0 0 0 / .1);

    @media (max-width: 500px){
      width: min(100rem, 100%);
      padding: 1.6rem .8rem;
    }
};

fieldset{
  border: 0;
  text-align: center;
};

.radio-wrapper > div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.4rem;

  @media (max-width: 500px){
    gap: .8rem;
  }
}

.radio-wrapper > div * {
  color: ${theme.colors.purple[200]};
  font-size: 2rem;
  text-align: center;

  @media (max-width: 500px){
    font-size: 1.2rem;
    text-align: center
  }
}

.radio-wrapper {
  border-radius: .4rem;
  border: .2rem solid ${theme.colors.yellow[500]};
  padding: 1.2rem;
  width: 75%;

  @media (max-width: 500px){
    padding: .4rem;
  }
}


.radio-wrapper input[type="radio"] {
  appearance: none;
  border: .1rem solid ${theme.colors.purple[200]};
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;

  @media (max-width: 500px){
    height: 2rem;
    width: 2rem
  }
}

.radio-wrapper input[type="radio"]:checked {
  background-image: radial-gradient(${theme.colors.purple[900]} 35%, ${theme.colors.purple[200]} 40%);
}

.radio-wrapper:not(:has(:checked)) {
  opacity: .6;
  border: .2rem solid ${theme.colors.purple[500]};
}

.radio-wrapper:has(:disabled){
  opacity: .2;
}

.Button-Div{
  /* width: 10%; */
  padding-top: 1.6rem;
  display: grid;
  place-items: center;
}
`;

export const RadiosDivWrapper = styled.div`
  padding-top: 1.6rem;
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(10rem,1fr));
  width: 100%;

  @media (max-width: 500px){
    grid-template-columns: repeat(2, minmax(10rem,1fr));
    place-items: center
  }
`;

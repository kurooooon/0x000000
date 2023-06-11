import styled from 'styled-components';
import Head from '../components/Head';
import PageWrapper from '../components/PageWrapper';
import { device } from '../constants/device';
import glitch from '../styles/glitch.module.scss';

export const Main = styled.main`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledGlitch = styled.h1`
  font-size: 3rem;
  font-family: 'Playball', cursive;

  @media ${device.tablet} {
    font-size: 5rem;
  }
`;

export default function TopPage() {
  return (
    <PageWrapper>
      <Head />

      <Main>
        <StyledGlitch data-text="0x000000" className={glitch.glitch}>
          0x000000
        </StyledGlitch>
      </Main>
    </PageWrapper>
  );
}

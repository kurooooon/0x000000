import styled from '@emotion/styled';
import Head from '../components/Head';
import PageWrapper from '../components/PageWrapper';
import { device } from '../constants/device';

export const Main = styled.main`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledH1 = styled.h1`
  font-size: 4rem;
`;

export default function TopPage() {
  return (
    <PageWrapper>
      <Head />

      <Main>
        <StyledH1>0x000000</StyledH1>
      </Main>
    </PageWrapper>
  );
}

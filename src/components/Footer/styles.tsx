import styled from '@emotion/styled';

export const Block = styled.footer`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const ListGroup = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0.5rem;

  li + li {
    margin-left: 1rem;
  }
`;

export const Copytight = styled.p`
  text-align: center;
`;

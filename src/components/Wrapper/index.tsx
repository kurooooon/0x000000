import styled from 'styled-components';
import styles from './index.module.css';

type Props = {
  children: React.ReactNode;
};

const StyledWrapper = styled.div`
  /* background-color: #1b262c; */
`;

const Wrapper = ({ children }: Props) => (
  <StyledWrapper className={styles.block}>{children}</StyledWrapper>
);
export default Wrapper;

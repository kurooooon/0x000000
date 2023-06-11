import styles from './index.module.css';

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => <div className={styles.block}>{children}</div>;
export default PageWrapper;

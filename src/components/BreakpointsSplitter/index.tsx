import { Hidden } from '@mui/material';

type Props = {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
};

const BreakpointsSplitter = ({ mobile, desktop }: Props) => {
  return (
    <>
      {/* TODO */}
      {/* @ts-ignore */}
      <Hidden smUp>{mobile}</Hidden>
      {/* @ts-ignore */}
      <Hidden xsDown>{desktop}</Hidden>
    </>
  );
};
export default BreakpointsSplitter;

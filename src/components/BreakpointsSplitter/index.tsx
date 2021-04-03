import { Hidden } from '@material-ui/core';

type Props = {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
};

const BreakpointsSplitter = ({ mobile, desktop }: Props) => {
  return (
    <>
      <Hidden smUp>{mobile}</Hidden>
      <Hidden xsDown>{desktop}</Hidden>
    </>
  );
};
export default BreakpointsSplitter;

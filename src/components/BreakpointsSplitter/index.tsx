import { useTheme } from '@emotion/react';
import { Box, Hidden, useMediaQuery } from '@mui/material';

type Props = {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
};

const BreakpointsSplitter = ({ mobile, desktop }: Props) => {
  const theme = useTheme();
  const isXl: boolean = useMediaQuery(() => theme.breakpoints.up('lg'));
  return <>{isXl ? desktop : mobile}</>;
};
export default BreakpointsSplitter;

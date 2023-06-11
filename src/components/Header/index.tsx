import {
  AppBar,
  Box,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import BreakpointsSplitter from '../BreakpointsSplitter';
import { DesktopNavigation } from './styles';

const Header = () => {
  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return (
    <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
      <Toolbar>
        <Box flexGrow={1} height={64}>
          <Typography component="h2">
            <Image alt="0x000000" src="/images/logo.png" width={64} height={64} />
          </Typography>
        </Box>
        <BreakpointsSplitter
          mobile={
            <>
              <IconButton onClick={onOpen} ref={anchorRef}>
                <FiMenu />
              </IconButton>
              <Popper
                open={isOpen}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: 'top center',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={onClose}>
                        <MenuList autoFocusItem={isOpen} id="menu-list-grow">
                          <MenuItem>
                            <Link href="/">Home</Link>
                          </MenuItem>
                          <MenuItem>
                            <Link href="/about">About</Link>
                          </MenuItem>
                          <MenuItem>
                            <Link href="/works/1">Works</Link>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          }
          desktop={
            <DesktopNavigation>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/works/1">Works</Link>
            </DesktopNavigation>
          }
        />
      </Toolbar>
    </AppBar>
  );
};
export default Header;

import React from 'react';
import Image from 'next/image';
import { Box, useTheme } from '@mui/material';
import { BsImageFill } from 'react-icons/bs';
import styled from '@emotion/styled';

const IconWrapper = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

type Props = {
  image?: {
    url: string;
  };
};

const WorkImage = ({ image }: Props) => {
  const theme = useTheme();
  if (!image) {
    return (
      <Box position="relative">
        <IconWrapper>
          <BsImageFill size={88} color={theme.palette.primary.main} />
        </IconWrapper>
        <img width="100%" src="http://placehold.jp/300x200.png?text=%20" alt="no image" />
      </Box>
    );
  }
  return (
    <Image
      src={`${image.url}?fit=fill&fill=blur&w=3000&h=2000`}
      alt=""
      width={3000}
      height={2000}
      layout="responsive"
    />
  );
};

export default WorkImage;

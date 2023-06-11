import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@material-ui/core';
import { FiExternalLink } from 'react-icons/fi';
import { Work } from '../../types/Work';
import { isEqual } from 'lodash';
import WorkImage from '../WorkImage';

type Props = {
  id: string;
  data: Work;
};

const WorkListItem = ({ id, data }: Props) => {
  const { title, image, url } = data;
  return (
    <li key={id} style={{ margin: '2rem 0' }}>
      <Link href={`/work/${id}`}>
        <div>
          <Typography variant="h5" component="h3">
            {title}
          </Typography>
          <Box mt={1}>
            <WorkImage image={image} />
          </Box>
        </div>
      </Link>
      {url ? (
        <a href={url} target="_blank">
          <Box mt={1} display="flex" alignItems="center">
            <Box component="span" display="flex" mr={0.5}>
              <FiExternalLink />
            </Box>
            {url}
          </Box>
        </a>
      ) : null}
      <hr style={{ marginTop: '1rem' }} />
    </li>
  );
};

const areEquals = (prev: Props, next: Props) =>
  prev.id === next.id && isEqual(prev.data, next.data);

export default React.memo(WorkListItem, areEquals);
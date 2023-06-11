import React from 'react';
import Link from 'next/link';
import { Breadcrumbs as BCS, Typography } from '@mui/material';

type Props = {
  crumbs: {
    link: string;
    label: string;
  }[];
};

export default function Breadcrumbs({ crumbs }: Props) {
  const last = crumbs.splice(crumbs.length - 1, 1)[0];
  return (
    <BCS aria-label="breadcrumb">
      {crumbs.map(({ link, label }) => (
        <Link key={link} href={link}>
          {label}
        </Link>
      ))}
      <Typography key={last.link} color="textPrimary">
        {last.label}
      </Typography>
    </BCS>
  );
}

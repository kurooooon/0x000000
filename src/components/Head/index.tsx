import React from 'react';
import NextHead from 'next/head';
import { SITE_NAME } from '../../constants/config';

type Props = {
  title?: string;
};

export default function Head({ title: t }: Props) {
  const title = t ? `${SITE_NAME} | ${t}` : SITE_NAME;
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}

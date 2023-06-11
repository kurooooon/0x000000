import { Box, Container, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FiExternalLink } from 'react-icons/fi';
import Breadcrumbs from '../../components/Breadcrumbs';
import Head from '../../components/Head';
import PageWrapper from '../../components/PageWrapper';
import WorkImage from '../../components/WorkImage';
import { HOME, WORKS } from '../../constants/route';
import { Work } from '../../types/Work';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params ? ctx.params.id : '';
  const data = await fetch(`${process.env.API_CMS}/works/${id}` || '', {
    headers: {
      'X-API-KEY': process.env.API_CMS_KEY || '',
    },
  }).then((res) => res.json());
  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [],
    fallback: true,
  };
};

type Content = {
  id: string;
  work: Work;
};

type Props = {
  data?: Content;
};

export default function WorkPage({ data }: Props) {
  const { id, work } = data || {};
  const { title, url, image, skill } = work || {};

  return (
    <PageWrapper>
      <Head title="works" />

      <Container>
        <Breadcrumbs
          crumbs={[
            { label: 'Home', link: HOME },
            { label: 'Works', link: WORKS() },
            { label: title || '', link: '' },
          ]}
        />

        <main>
          <Box mt={2}>
            <Typography variant="h4" component="h1">
              {title}
            </Typography>
            <Box mt={1}>
              <WorkImage image={image} />
            </Box>
            {skill ? (
              <Box mt={1}>
                <Typography>使用技術: {skill}</Typography>
              </Box>
            ) : null}
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
          </Box>
        </main>
      </Container>
    </PageWrapper>
  );
}

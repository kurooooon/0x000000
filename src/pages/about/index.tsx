import { Box, Container, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Breadcrumbs from '../../components/Breadcrumbs';
import Head from '../../components/Head';
import PageWrapper from '../../components/PageWrapper';
import { HOME } from '../../constants/route';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await fetch(`${process.env.API_CMS}/about` || '', {
    headers: {
      'X-API-KEY': process.env.API_CMS_KEY || '',
    },
  }).then((res) => res.json());
  return { props: { data } };
};

type Props = {
  data: {
    overview: string;
    skill: string;
  };
};

export default function AboutPage({ data }: Props) {
  const { overview, skill } = data || {};
  return (
    <PageWrapper>
      <Head title="About" />

      <Container>
        <Breadcrumbs
          crumbs={[
            { label: 'Home', link: HOME },
            { label: 'About', link: '' },
          ]}
        />

        <main>
          <Box mt={2} mb={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box flexGrow="0" maxWidth={160}>
                <Image
                  alt=""
                  src="/images/profile.jpg"
                  width={88}
                  height={88}
                  layout="responsive"
                />
              </Box>
              <Typography variant="h5" component="h3">
                kuro
              </Typography>
            </Box>

            <Box mt={2}>
              <Typography variant="h4" component="h2">
                overview
              </Typography>
              <Box mt={1}>
                <div dangerouslySetInnerHTML={{ __html: overview }} />
              </Box>
            </Box>
            <Box mt={2}>
              <Typography variant="h4" component="h2">
                skill, interest&ensp;
                <span style={{ fontSize: '14px' }}>(new -&gt; old)</span>
              </Typography>
              <Box mt={1}>
                <p>{skill}</p>
              </Box>
            </Box>
          </Box>
        </main>
      </Container>
    </PageWrapper>
  );
}

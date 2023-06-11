import { Box, Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Head from '../../components/Head';
import PageWrapper from '../../components/PageWrapper';
import WorkListItem from '../../components/WorkListItem';
import { HOME } from '../../constants/route';
import { Work } from '../../types/Work';

const LIMIT = 10;

const pageFecher = async (url: string) =>
  await fetch(url || '', {
    headers: {
      'X-API-KEY': process.env.API_CMS_KEY || '',
    },
  }).then((res) => res.json());

const getTotalPage = (data: Data) => {
  const { totalCount } = data;
  const total = Math.floor(totalCount / LIMIT);
  return total <= 0 ? 1 : total;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = ctx.params ? Number(ctx.params.page) : 1;
  const offset = (page - 1) * LIMIT;
  const data = await pageFecher(
    `${process.env.API_CMS}/works?limit=${LIMIT}&offset=${offset}`
  );
  return { props: { data } };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const data = await pageFecher(`${process.env.API_CMS}/works`);
  const totalPage = getTotalPage(data);
  const paths = Array(totalPage)
    .fill(0)
    .map((_, index) => {
      return {
        params: {
          page: (index + 1).toString(),
        },
      };
    });
  return {
    paths,
    fallback: false,
  };
};

type Content = {
  id: string;
  work: Work;
};

type Data = {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
};

type Props = {
  data: Data;
};

export default function WorksPage({ data }: Props) {
  const { contents } = data;
  const router = useRouter();
  const { query } = router;
  const { page = 1 } = query;
  const totalPage = getTotalPage(data);
  const onClickPagination = useCallback(
    (_: unknown, page: number) => router.push(`/works/${page}`),
    []
  );

  return (
    <PageWrapper>
      <Head title="works" />

      <Container>
        <Breadcrumbs
          crumbs={[
            { label: 'Home', link: HOME },
            { label: 'Works', link: '' },
          ]}
        />

        <main>
          <Box mt={2}>
            <ul>
              {contents.map(({ id, work }) => (
                <WorkListItem key={id} id={id} data={work} />
              ))}
            </ul>
          </Box>
          <Box display="flex" justifyContent="center" mt={2} mb={2}>
            <Pagination
              size="small"
              onChange={onClickPagination}
              page={Number(page)}
              count={totalPage}
              shape="rounded"
            />
          </Box>
        </main>
      </Container>
    </PageWrapper>
  );
}

import client from '@/lib/graphQLClient';
import textPageQuery from '../../queries/textPage.graphql';

export default async function Page() {
  const { data } = await client.query({
    query: textPageQuery,
    variables: { slug: 'termos-de-uso' },
  });

  return (
    <div className="w-full mx-auto pt-12 md:pt-24 lg:pt-32 prose">
      <div dangerouslySetInnerHTML={{ __html: data.textPage?.text.html }} />
    </div>
  );
}

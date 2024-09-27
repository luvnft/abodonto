import client from '@/graphql/client';
import { TextPageQuery } from '@/graphql/gql/graphql';
import textPageQuery from '@/graphql/queries/textPage.graphql';

export default async function Page() {
  const { data } = await client.query<TextPageQuery>({
    query: textPageQuery,
    variables: { slug: 'termos-de-uso' },
  });

  return (
    <div className="w-full mx-auto pt-12 md:pt-24 lg:pt-32 prose">
      <div
        dangerouslySetInnerHTML={{ __html: data.textPage?.text.html || '' }}
      />
    </div>
  );
}

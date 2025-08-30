import DetailNew from "@/components/detail-news"

export default async function Page({ params }: {params: Promise<{slug: string}>}){
  const { slug } = await params;

  return(
    <DetailNew slug={slug} />
  )
}
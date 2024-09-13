import BlogList from './_components/BlogList'
import { client } from './_libs/microcms'
import type { Blog } from './_types'

export default async function Page() {
	const { contents } = await client.getList<Blog>({
		endpoint: 'blogs',
	})
	return (
		<main className='grid gap-8 md:grid-cols-[1fr_360px] '>
			{/* ブログ一覧を出力するコンポーネント */}
			<BlogList contents={contents} />
		</main>
	)
}

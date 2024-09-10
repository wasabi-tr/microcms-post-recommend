import BlogList from './_components/BlogList'
import Recommend from './_components/Recommend'
import { client } from './_libs/microcms'
import type { Blog, Pickup } from './_types'

export default async function Page() {
	const { contents } = await client.getList<Blog>({
		endpoint: 'blogs',
	})

	const { pickup: pickupContents } = await client.getObject<Pickup>({
		endpoint: 'pickup',
	})

	return (
		<main className='grid gap-8 md:grid-cols-[1fr_360px] '>
			{/* ブログ一覧を出力するコンポーネント */}
			<BlogList contents={contents} />

			{/* ピックアップで選択したブログを出力するコンポーネント */}
			<Recommend contents={pickupContents} title='ピックアップ' />
		</main>
	)
}

import BlogDetail from '@/app/_components/BlogDeteil'
import Recommend from '@/app/_components/Recommend'
import {
	getBlogDetail,
	getBlogs,
	getBlogsByCategory,
	getBlogsByKeyword,
} from '@/app/_libs/microcms'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const { contents } = await getBlogs()

	return contents.map(content => ({
		slug: content.id,
	}))
}

export default async function Page({
	params: { slug },
}: {
	params: { slug: string } // URLからアクセスしているブログのslugを取得
}) {
	// ブログの詳細情報を取得
	const blog = await getBlogDetail(slug)

	if (!blog) {
		return notFound()
	}

	// カテゴリのコンテンツIDを取得
	const { id: categoryId } = blog.category

	// キーワードを取得
	const { keyword } = blog

	// 手動で設定したコンテンツを取得
	const { pickup } = blog

	// qパラメータで全フィールドを対象にキーワード検索
	const { contents: relatedContentsByQ } = await getBlogsByKeyword({
		limit: 3,
		q: keyword,
		filters: `id[not_equals]${slug}`,
	})

	// filtersパラメータで同じカテゴリのブログを取得
	const { contents: relatedContentsByCategory } = await getBlogsByCategory({
		limit: 3,
		filters: `category[equals]${categoryId}[and]id[not_equals]${slug}`,
	})

	return (
		<main className='grid gap-8 md:grid-cols-[1fr_360px]'>
			{/* ブログの詳細情報を出力するコンポーネント */}
			<BlogDetail blog={blog} />

			{/* 関連記事を出力するコンポーネント */}
			<div className='grid gap-2 h-max'>
				<Recommend contents={pickup} title='ピックアップ' />
				<Recommend contents={relatedContentsByQ} title='関連記事' />
				<Recommend
					contents={relatedContentsByCategory}
					title={blog.category.name}
				/>
			</div>
		</main>
	)
}

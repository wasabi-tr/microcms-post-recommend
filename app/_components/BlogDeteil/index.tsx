import type { Blog } from '@/app/_types'
import Image from 'next/image'
import PublishDate from '../PublishDate'

type Props = {
	blog: Blog
}
export default function BlogDetail({ blog }: Props) {
	const categoryName = blog.category.name
	return (
		<section>
			<div className='bg-white rounded-lg shadow-md overflow-hidden'>
				<Image
					src={blog.eyecatch.url}
					alt={blog.title}
					width={blog.eyecatch.width}
					height={blog.eyecatch.height}
					className='w-full aspect-video object-cover'
				/>
				<div className='p-8'>
					<h1 className='text-3xl font-bold mb-4'>{blog.title}</h1>
					<p className='text-sm mb-4'>
						<PublishDate date={blog.revisedAt || blog.createdAt} />
					</p>
					<span className='mb-4 rounded-lg bg-white p-2 border border-gray-400 inline-block'>
						{categoryName}
					</span>
					<div>
						<div
							dangerouslySetInnerHTML={{
								__html: blog.content,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

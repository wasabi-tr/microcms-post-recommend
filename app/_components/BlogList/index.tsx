import type { Blog } from '@/app/_types'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PublishDate from '../PublishDate'

export default function BlogList({ contents }: { contents: Blog[] }) {
	if (!contents || contents.length === 0) {
		return <div>記事がありません</div>
	}
	return (
		<section>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{contents.map(item => (
					<article
						key={item.id}
						className='bg-white rounded-lg shadow-md overflow-hidden'
					>
						<Link href={`/${item.id}` as Route}>
							<Image
								src={item.eyecatch.url}
								alt={item.title}
								width={item.eyecatch.width}
								height={item.eyecatch.height}
								className='w-full aspect-video object-cover'
							/>
						</Link>
						<div className='p-4'>
							<Link
								href={`/${item.id}` as Route}
								className='block mb-2 text-lg font-bold hover:text-accent'
							>
								{item.title}
							</Link>
							<p className='text-muted-foreground text-sm mb-4'>
								<PublishDate date={item.revisedAt || item.createdAt} />
							</p>
							<p className='line-clamp-3 text-muted-foreground'>
								{item.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

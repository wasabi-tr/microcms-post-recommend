import type { Blog } from '@/app/_types'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	contents: Blog[]
	title: string
}
export default function Recommend({ contents, title }: Props) {
	if (!contents || contents.length === 0) {
		return <div>記事がありません</div>
	}
	return (
		<section className='space-y-8'>
			<div className='rounded-lg bg-white p-4 shadow-md'>
				<h3 className='mb-4 text-lg font-semibold'>{title}</h3>
				<div className='grid gap-2'>
					{contents.map(item => (
						<div key={item.id} className='grid gap-4'>
							<Link href={`/${item.id}` as Route} className='group flex gap-4'>
								<Image
									src={item.eyecatch.url}
									alt={item.title}
									width={item.eyecatch.width}
									height={item.eyecatch.height}
									className='aspect-square w-20 rounded-lg object-cover transition-opacity group-hover:opacity-80'
								/>
								<div className='grid gap-1'>
									<h4 className='text-base  transition-colors group-hover:text-primary'>
										{item.title}
									</h4>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

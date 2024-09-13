import { type MicroCMSQueries, createClient } from 'microcms-js-sdk'
import type { Blog } from '../_types'

if (!process.env.SERVICE_DOMAIN) {
	throw new Error('SERVICE_DOMAIN is required')
}

if (!process.env.API_KEY) {
	throw new Error('API_KEY is required')
}

export const client = createClient({
	serviceDomain: process.env.SERVICE_DOMAIN,
	apiKey: process.env.API_KEY,
})

/* === 本来は1つでOK ブログ用に別々に定義してる === */
export const getBlogs = async (queries?: MicroCMSQueries) => {
	const blogList = await client.getList<Blog>({
		endpoint: 'blogs',
		queries,
	})
	return blogList
}

export const getBlogsByKeyword = async (queries?: MicroCMSQueries) => {
	const blogList = await client.getList<Blog>({
		endpoint: 'blogs',
		queries,
	})
	return blogList
}

export const getBlogsByCategory = async (queries?: MicroCMSQueries) => {
	const blogList = await client.getList<Blog>({
		endpoint: 'blogs',
		queries,
	})
	return blogList
}
/* === /本来は1つでOK ブログ用に別々に定義してる === */

export const getBlogDetail = async (contentId: string) => {
	const blog = await client.getListDetail<Blog>({
		contentId,
		endpoint: 'blogs',
	})
	return blog
}

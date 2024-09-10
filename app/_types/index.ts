import type {
	MicroCMSContentId,
	MicroCMSDate,
	MicroCMSImage,
} from 'microcms-js-sdk'

export type Blog = {
	title: string
	description: string
	content: string
	eyecatch: MicroCMSImage
	category: Category
	keyword: string
} & MicroCMSContentId &
	MicroCMSDate

export type Category = {
	name: string
} & MicroCMSContentId &
	MicroCMSDate

export type Pickup = {
	pickup: Blog[]
} & MicroCMSDate

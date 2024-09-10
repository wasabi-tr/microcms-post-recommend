import { formatInTimeZone } from 'date-fns-tz'

type Props = {
	date: string
}

export default function PublishDate({ date }: Props) {
	const utcDate = new Date(date)
	return <span>{formatInTimeZone(utcDate, 'Asia/Tokyo', 'yyyy-MM-dd')}</span>
}

import { client } from '@/lib/client/hc'

const HomePage = async () => {
	const response = await client.user.hello.$get({ name: 'Alisa' })

	const { message } = await response.json()

	return <div>{message}</div>
}

export default HomePage

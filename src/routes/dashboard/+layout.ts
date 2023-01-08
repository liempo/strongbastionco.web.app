import type { LayoutLoad } from './$types'

type Route = {
	name: string
	icon: string
	routeId: string
}

const routes: Route[] = [
	{
		name: 'Overview',
		icon: 'home',
		routeId: '/dashboard/overview'
	},
	{
		name: 'Users',
		icon: 'user',
		routeId: '/dashboard/users'
	}
]

export const load: LayoutLoad = async () => {
	return { routes }
}

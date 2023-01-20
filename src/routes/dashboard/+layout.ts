import type { RouteItem } from '@/types/app.types'
import type { LayoutLoad } from './$types'

const routes: RouteItem[] = [
	{
		id: '/dashboard/overview',
		name: 'Overview',
		icon: 'home'
	},
	{
		id: '/dashboard/users',
		name: 'Users',
		icon: 'user'
	}
]

export const load: LayoutLoad = async () => {
	return { routes }
}

import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async () => {
	return {
		routes: [
			{
				name: 'Overview',
				icon: 'home',
				routeId: '/dashboard/overview'
			}
		]
	}
}

import type { LayoutServerLoad } from './$types';

export const load = (async ({ params }) => {
	if (params.slug === 'ipiranga') {
		return {
			logo: 'https://static.moss.earth/strapi/ipiranga_logo_min_9d6b1bd942/ipiranga_logo_min_9d6b1bd942.svg',
			style: {
				white: 'white',
				'primary-color': '#013765',
				'text-acent': '#ffcf00'
			}
		};
	}
	return {
		logo: 'https://static.moss.earth/strapi/ipiranga_logo_min_9d6b1bd942/ipiranga_logo_min_9d6b1bd942.svg',
		style: {
			white: 'green',
			'primary-color': '#c354a2',
			'text-acent': '#c3f4a2'
		}
	};
}) satisfies LayoutServerLoad;

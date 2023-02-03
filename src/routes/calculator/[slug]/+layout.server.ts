import type { LayoutServerLoad } from './$types';

export const load = (async ({ params }) => {
	if (params.slug === 'ipiranga') {
		return {
			style: {
				white: 'white',
				'primary-color': '#013765',
				'text-acent': '#ffcf00'
			}
		};
	}
	return {
		style: {
			white: 'green',
			'primary-color': '#c354a2',
			'text-acent': '#c3f4a2'
		}
	};
}) satisfies LayoutServerLoad;

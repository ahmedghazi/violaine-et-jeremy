export const projectCard = `
	...,
	_type,
	slug,
	title,
	job,
	imageCover {
		...,
		asset->
	},
	imageHome {
		...,
		asset->
	},
	colorPalette
`

export const spaceCard = `
	...,
	_type,
	slug,
	title,
	job,
	imageCover {
		...,
		asset->
	},
	imageHome {
		...,
		asset->
	},
	colorPalette
`

export const content = `
	...,
	items[]{
		...,
		image{
			asset->
		}
	}
`

export const blockContent = `
	_type == 'blockContent' => {
		...
	}
`

export const mainImage = `
	_type == 'mainImage' => {
		...
	}
`

export const youtube = `
	_type == 'youtube' => {
		...
	}
`

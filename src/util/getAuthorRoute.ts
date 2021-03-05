const getAuthorRoute = (authorName: string): string => {
	return authorName.replaceAll(' ', '+')
}

export default getAuthorRoute

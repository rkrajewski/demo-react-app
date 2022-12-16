export interface IGithubApiSearchUsersParams {
  name: string
  page?: number
  itemsPerPage?: number
}

export const createUrlGithubApiSearchUsers = ({ name, page, itemsPerPage }: IGithubApiSearchUsersParams) => {
  const url = new URL('https://api.github.com/search/users')
  url.searchParams.append('q', name)
  url.searchParams.append('page', String(page || 1))
  url.searchParams.append('per_page', String(itemsPerPage || 5))

  return url
}

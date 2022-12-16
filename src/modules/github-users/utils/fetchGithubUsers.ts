import { fetchJson } from 'utils/common/fetchJson'

import { IGithubUser } from '../types'

import { IGithubApiSearchUsersParams, createUrlGithubApiSearchUsers } from './createUrlGithubApiSearchUsers'

export interface IGithubApiUsersResponse {
  items: IGithubUser[]
  total_count: number
}

export const fetchGithubUsers = async (params: IGithubApiSearchUsersParams) => {
  const url = createUrlGithubApiSearchUsers(params)

  return fetchJson<IGithubApiUsersResponse>(url)
}

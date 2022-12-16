export interface IGithubUser {
  id: number
  login: string
  avatar_url: string
  repos_url: string
  html_url: string
}

export interface IGithubUsersFeatureState {
  users: IGithubUser[]
}

export interface IGithubApiRepository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
}

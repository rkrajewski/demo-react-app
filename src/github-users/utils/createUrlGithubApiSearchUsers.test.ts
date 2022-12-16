import { createUrlGithubApiSearchUsers } from './createUrlGithubApiSearchUsers'

test('createUrlGithubApiSearchUsers', () => {
  expect(createUrlGithubApiSearchUsers({ name: 'test', page: 2, itemsPerPage: 6 })).toMatchInlineSnapshot(
    `"https://api.github.com/search/users?q=test&page=2&per_page=6"`
  )
})

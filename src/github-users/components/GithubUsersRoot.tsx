import React from 'react'
import { useDispatch } from 'react-redux'

import { Alert, Box } from '@mui/material'
import GithubUserList from 'github-users/components/GithubUserList'
import GithubUserSearchInput from 'github-users/components/GithubUserSearchInput'

import { useFetchJson } from 'utils/hooks/useFetchJson'

import { githubUsersFeature } from '../store'
import { IGithubUser } from '../types'
import { createUrlGithubApiSearchUsers } from '../utils/createUrlGithubApiSearchUsers'

interface IGithubApiUsersResponse {
  items: IGithubUser[]
  total_count: number
}

function GithubUsersRoot() {
  const dispatch = useDispatch()
  const { error, loading, fetch } = useFetchJson<IGithubApiUsersResponse>(ghUsersResult => {
    dispatch(githubUsersFeature.actions.updateUsers(ghUsersResult?.items || []))
  })
  const search = async (name: string) => {
    await fetch(createUrlGithubApiSearchUsers({ name }))
  }

  return (
    <Box
      sx={{
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <GithubUserSearchInput loading={loading} onSearch={search} />
      {error ? <Alert severity="error">{String(error)}</Alert> : <GithubUserList />}
    </Box>
  )
}

export default GithubUsersRoot

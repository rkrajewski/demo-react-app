import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Alert, Box } from '@mui/material'
import GithubUserList from 'modules/github-users/components/GithubUserList'
import GithubUserSearchInput from 'modules/github-users/components/GithubUserSearchInput'

import { githubUsersFeature } from '../store'
import { fetchGithubUsers } from '../utils/fetchGithubUsers'

function GithubUsersRoot() {
  const dispatch = useDispatch()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const search = async (name: string) => {
    try {
      setError(undefined)
      setLoading(true)

      const ghUsersResult = await fetchGithubUsers({ name })

      dispatch(githubUsersFeature.actions.updateUsers(ghUsersResult.items))
    } catch (exception) {
      setError(String(exception))
    } finally {
      setLoading(false)
    }
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
      {error ? <Alert severity="error">{error}</Alert> : <GithubUserList />}
    </Box>
  )
}

export default GithubUsersRoot

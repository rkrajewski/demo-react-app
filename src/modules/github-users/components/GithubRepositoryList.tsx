import React from 'react'

import { Alert, Box, Skeleton } from '@mui/material'

import GithubRepository, { IGithubApiRepository } from './GithubRepository'

interface Props {
  repos: IGithubApiRepository[] | undefined
}

function GithubUserListItemPlaceholder() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Skeleton variant="rounded" animation="pulse" />
      <Skeleton variant="rounded" animation="pulse" />
      <Skeleton variant="rounded" animation="pulse" />
    </Box>
  )
}

function GithubRepositoryList(props: Props) {
  const { repos } = props

  if (!repos) {
    return <GithubUserListItemPlaceholder />
  }

  if (!repos.length) {
    return <Alert severity="info">No repositories found</Alert>
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
      {repos.map(repo => (
        <GithubRepository key={repo.id} repo={repo} />
      ))}
    </Box>
  )
}

export default GithubRepositoryList

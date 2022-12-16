import React from 'react'
import { useSelector } from 'react-redux'

import { Box } from '@mui/material'

import { selectGithubUsers } from '../store'
import { IGithubUser } from '../types'

import GithubUser from './GithubUser'

function GithubUserList() {
  const users: IGithubUser[] = useSelector(selectGithubUsers)

  return (
    <Box>
      {users.map(user => (
        <GithubUser key={user.id} user={user} />
      ))}
    </Box>
  )
}

export default GithubUserList

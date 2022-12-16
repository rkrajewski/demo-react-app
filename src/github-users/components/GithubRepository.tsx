import React from 'react'

import StarIcon from '@mui/icons-material/Star'
import { Box, Link, Paper, Typography } from '@mui/material'

import { IGithubApiRepository } from '../types'

interface Props {
  repo: IGithubApiRepository
}

function GithubRepository(props: Props) {
  const { repo } = props

  return (
    <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', padding: 1 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 0fr', gap: 1 }}>
        <Link
          href={repo.html_url}
          target="_blank"
          title={repo.name}
          sx={{
            fontWeight: 'bold',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {repo.name}
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {repo.stargazers_count}
          <StarIcon sx={{ width: 20 }} />
        </Box>
      </Box>
      {repo.description && (
        <Box sx={{ paddingTop: 1 }}>
          <Typography textOverflow="ellipsis" fontSize="small">
            {repo.description}
          </Typography>
        </Box>
      )}
    </Paper>
  )
}

export default GithubRepository

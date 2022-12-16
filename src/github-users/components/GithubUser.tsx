import React, { useEffect, useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Alert, Avatar, Box, Link, Typography } from '@mui/material'

import { useFetchJson } from 'utils/hooks/useFetchJson'

import { IGithubApiRepository, IGithubUser } from '../types'

import GithubRepositoryList from './GithubRepositoryList'

const accordionAnimationEndTimeout = 250

interface Props {
  user: IGithubUser
}

function GithubUser(props: Props) {
  const { user } = props

  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded(_expanded => !_expanded)
  const [repos, setRepos] = useState<IGithubApiRepository[]>()
  const { error, fetch } = useFetchJson<IGithubApiRepository[]>(setRepos)

  const onAccordionOpen = () => fetch(user.repos_url)
  const onAccordionClose = () => {
    setTimeout(() => {
      setRepos(undefined)
    }, accordionAnimationEndTimeout)
  }

  useEffect(() => {
    if (expanded) {
      onAccordionOpen()
    }
  }, [expanded])

  return (
    <Accordion
      expanded={expanded}
      onChange={toggleExpanded}
      TransitionProps={{
        timeout: accordionAnimationEndTimeout,
        addEndListener: () => !expanded && onAccordionClose(),
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 1 }}>
          <Avatar src={user.avatar_url} sx={{ width: 40, height: 40 }} />
          <Link href={user.html_url} target="_blank" color="inherit" underline="none">
            <Typography fontWeight="bold">{user.login}</Typography>
          </Link>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {error ? <Alert severity="error">{String(error)}</Alert> : <GithubRepositoryList repos={repos} />}
      </AccordionDetails>
    </Accordion>
  )
}

export default GithubUser

import React, { useEffect, useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Alert, Avatar, Box, Link, Typography } from '@mui/material'

import { fetchJson } from 'utils/common/fetchJson'

import { IGithubUser } from '../types'

import { IGithubApiRepository } from './GithubRepository'

const accordionAnimationEndTimeout = 250

interface Props {
  user: IGithubUser
}

function GithubUser(props: Props) {
  const { user } = props

  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded(_expanded => !_expanded)

  const [repos, setRepos] = useState<IGithubApiRepository[]>()
  const [error, setError] = useState<string>()

  const onAccordionOpen = async () => {
    try {
      const result = await fetchJson<IGithubApiRepository[]>(user.repos_url)
      setRepos(result)
    } catch (exception) {
      setError(`Can't fetch repositories: ${exception}`)
    }
  }
  const onAccordionClose = () => {
    setTimeout(() => {
      setError(undefined)
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
      <AccordionDetails>{error ? <Alert severity="error">{error}</Alert> : null}</AccordionDetails>
    </Accordion>
  )
}

export default GithubUser

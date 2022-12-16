import React, { useState } from 'react'

import { Box, Button, CircularProgress, TextField } from '@mui/material'

interface Props {
  loading?: boolean
  onSearch: (name: string) => Promise<void> | void
}

function GithubUserSearchInput(props: Props) {
  const { loading, onSearch } = props

  const [value, setValue] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => setValue(e.target.value)
  const submit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSearch(value)
  }

  return (
    <Box component="form" onSubmit={submit} sx={{ padding: 1, paddingLeft: 0, display: 'flex', gap: 1 }}>
      <TextField
        id="outlined-basic"
        label="Enter username"
        variant="outlined"
        value={value}
        disabled={loading}
        onChange={handleChange}
        sx={{ flex: 1 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', width: 120 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" type="submit" sx={{ flex: 1 }}>
            Search
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default GithubUserSearchInput

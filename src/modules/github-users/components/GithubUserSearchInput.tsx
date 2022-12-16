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
  const search = () => {
    onSearch(value)
  }

  return (
    <Box sx={{ padding: 1, paddingLeft: 0, display: 'flex' }}>
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
        {loading ? <CircularProgress /> : <Button onClick={() => search()}>Search</Button>}
      </Box>
    </Box>
  )
}

export default GithubUserSearchInput

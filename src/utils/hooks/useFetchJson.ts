import { useCallback, useEffect, useState } from 'react'

import { fetchJson } from 'utils/common/fetchJson'

export function useFetchJson<T>(callback: (data: T | undefined) => void) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState(false)

  const fetch = useCallback(async (url: string | URL, options?: RequestInit) => {
    try {
      setError(undefined)
      setLoading(true)
      setData(await fetchJson(url, options))
    } catch (exception) {
      setData(undefined)
      setError(exception as Error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    callback(data)
  }, [data])

  return { data, error, loading, fetch }
}

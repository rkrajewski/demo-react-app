export const fetchJson = async <T>(url: string | URL, options?: RequestInit) => {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`[Error ${response.status}] ${response.statusText}`)
  }

  const result: T = await response.json()

  return result
}

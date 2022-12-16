import React from 'react'

import { render, screen } from '@testing-library/react'

import GithubRepository from './GithubRepository'

const repoMock = {
  id: 12345,
  name: 'Repo Mock',
  description: 'Test description',
  html_url: 'http://example.com',
  stargazers_count: 7,
}

describe('GithubRepository component', () => {
  test('renders repo title as link', () => {
    render(<GithubRepository repo={repoMock} />)
    const titleElement = screen.getByText(repoMock.name)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toBeInstanceOf(HTMLAnchorElement)
    expect(titleElement).toHaveAttribute('href', repoMock.html_url)
  })

  test('renders repo stars', () => {
    const component = render(<GithubRepository repo={repoMock} />)
    const starsCountNode = component.container.querySelector('svg')?.previousSibling
    expect(starsCountNode).toMatchInlineSnapshot(`7`)
  })

  test('renders repo description', () => {
    render(<GithubRepository repo={repoMock} />)
    const descriptionElement = screen.getByText(repoMock.description)
    expect(descriptionElement).toBeInTheDocument()
  })
})

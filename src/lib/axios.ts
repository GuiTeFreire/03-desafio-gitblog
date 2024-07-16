import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const getUser = (username: string) => api.get(`/users/${username}`)

export const searchIssues = (query: string) =>
  api.get(`/search/issues?q=${query}`)

export const getIssue = (owner: string, repo: string, issueNumber: number) =>
  api.get(`/repos/${owner}/${repo}/issues/${issueNumber}`)

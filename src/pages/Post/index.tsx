import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { PostInfo } from '../../components/PostInfo'
import { PostContainer, PostText } from './styles'
import { useEffect, useState } from 'react'
import { getIssue } from '../../lib/axios'
import ReactMarkdown from 'react-markdown'

interface Issue {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  user: {
    login: string
  }
  comments: number
}

export function Post() {
  const { issueNumber } = useParams<{ issueNumber: string }>()
  const [issue, setIssue] = useState<Issue | null>(null)

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await getIssue(
          'GuiTeFreire',
          '03-desafio-gitblog',
          Number(issueNumber),
        )
        setIssue(response.data)
      } catch (error) {
        console.error('Error fetching issue:', error)
      }
    }

    fetchIssue()
  }, [issueNumber])

  if (!issue) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Header />
      <PostInfo issue={issue} />
      <PostContainer>
        <PostText>
          <ReactMarkdown>{issue?.body}</ReactMarkdown>
        </PostText>
      </PostContainer>
    </div>
  )
}

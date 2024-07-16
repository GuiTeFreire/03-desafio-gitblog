import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Container, Content, PostTime, Title } from './styles'

interface PostCardProps {
  issue: {
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
}

export function PostCard({ issue }: PostCardProps) {
  return (
    <Container to={`/post/${issue.number}`}>
      <Title>{issue.title}</Title>
      <PostTime>
        {formatDistanceToNow(new Date(issue.created_at), {
          addSuffix: true,
          locale: ptBR,
        })}
      </PostTime>
      <Content>{issue.body}</Content>
    </Container>
  )
}

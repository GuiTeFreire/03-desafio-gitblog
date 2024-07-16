import {
  Back,
  Comments,
  Date,
  GithubLink,
  Info,
  InfoContainer,
  Title,
  Username,
} from './styles'
import redirect from '../../assets/redirect.svg'
import user from '../../assets/user.svg'
import calendar from '../../assets/calendar.svg'
import comments from '../../assets/comments.svg'
import back from '../../assets/back.svg'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

export function PostInfo({ issue }: PostCardProps) {
  return (
    <InfoContainer>
      <div>
        <Back href="/">
          <img src={back} alt="" />
          <span>VOLTAR</span>
        </Back>
        <Title>{issue.title}</Title>
        <Info>
          <Username>
            <img src={user} alt="" />
            <span>{issue.user.login}</span>
          </Username>
          <Date>
            <img src={calendar} alt="" />
            <span>
              {formatDistanceToNow(issue.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </Date>
          <Comments>
            <img src={comments} alt="" />
            <span>{issue.comments} comentários</span>
          </Comments>
        </Info>
        <GithubLink
          href={`https://github.com/GuiTeFreire/03-desafio-gitblog/issues/${issue.number}`}
        >
          <span>VER NO GITHUB</span>
          <img src={redirect} alt="" />
        </GithubLink>
      </div>
    </InfoContainer>
  )
}

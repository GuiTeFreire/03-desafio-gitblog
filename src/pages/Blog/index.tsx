import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { BlogContainer, PostCount, PostList, SearchTitle } from './styles'
import { searchIssues } from '../../lib/axios'
import { SearchFormContainer } from '../Post/styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface PostListProps {
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
  }[]
}

const searchFormSchema = z.object({
  query: z.string(),
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {
  const [issues, setIssues] = useState<PostListProps['issue']>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  const fetchIssues = async (query: string) => {
    const response = await searchIssues(query)
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues('repo:GuiTeFreire/03-desafio-gitblog')
  }, [])

  const {
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchPosts = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetchIssues(`${searchTerm} repo:GuiTeFreire/03-desafio-gitblog`)
  }

  return (
    <div>
      <Header />
      <Profile />

      <BlogContainer>
        <SearchTitle>Publicações</SearchTitle>
        <PostCount>{issues.length} publicações</PostCount>
        <form onSubmit={handleSearchPosts}>
          <SearchFormContainer
            type="text"
            value={searchTerm}
            placeholder="Buscar Conteúdo"
            {...register('query')}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" disabled={isSubmitting} />
        </form>

        <PostList>
          {issues.map((issue) => (
            <PostCard key={issue.id} issue={issue} />
          ))}
        </PostList>
      </BlogContainer>
    </div>
  )
}

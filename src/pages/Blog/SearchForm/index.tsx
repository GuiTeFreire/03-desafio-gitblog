import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'
import { PostsContext } from '../../../contexts/PostsContext'
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchPosts = useContextSelector(PostsContext, (context) => {
    return context.fetchPosts
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input
        type="text"
        placeholder="Buscar Conteúdo"
        disabled={isSubmitting}
        {...register('query')}
      />
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)

import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { SearchForm } from './SearchForm'
import { BlogContainer, PostCount, PostList, SearchTitle } from './styles'

export function Blog() {
  return (
    <div>
      <Header />
      <Profile />

      <BlogContainer>
        <SearchTitle>Publicações</SearchTitle>
        <PostCount>6 publicações</PostCount>
        <SearchForm />

        <PostList>
          <PostCard />
          <PostCard />
        </PostList>
      </BlogContainer>
    </div>
  )
}

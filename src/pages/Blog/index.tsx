import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchForm } from './SearchForm'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <div>
      <Header />
      <Profile />

      <BlogContainer>
        <SearchForm />
      </BlogContainer>
    </div>
  )
}

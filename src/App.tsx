import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { PostsProvider } from './contexts/PostsContext'
import { Blog } from './pages/Blog'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostsProvider>
        <Blog />
      </PostsProvider>
    </ThemeProvider>
  )
}

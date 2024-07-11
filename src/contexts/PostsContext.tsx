import { createContext, ReactNode, useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
}

interface PostContextType {
  posts: Post[]
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts] = useState<Post[]>([])
  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}

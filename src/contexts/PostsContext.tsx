import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'
interface Post {
  id: number
  title: string
  body: string
}

interface PostContextType {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get('posts', {
      params: {
        _sort: 'title',
        _order: 'desc',
        q: query,
      },
    })
    setPosts(response.data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

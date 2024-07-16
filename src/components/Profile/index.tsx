import {
  Avatar,
  Bio,
  Company,
  Followers,
  GithubLink,
  Info,
  Name,
  ProfileContainer,
  Username,
} from './styles'
import redirect from '../../assets/redirect.svg'
import user from '../../assets/user.svg'
import company from '../../assets/company.svg'
import followers from '../../assets/followers.svg'
import { useEffect, useState } from 'react'
import { getUser } from '../../lib/axios'

interface UserProfile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  company: string
}

export function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const username = 'GuiTeFreire'

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUser(username)
        setProfile(response.data)
      } catch (error) {
        console.error('Error fetching profile data:', error)
      }
    }

    fetchProfile()
  }, [username])

  return (
    <ProfileContainer>
      <Avatar src={profile?.avatar_url} alt="Profile" />
      <div>
        <Name>{profile?.name}</Name>
        <Bio>{profile?.bio}</Bio>
        <Info>
          <Username>
            <img src={user} alt="" />
            <span>{profile?.login}</span>
          </Username>
          <Company>
            <img src={company} alt="" />
            <span>{profile?.company}</span>
          </Company>
          <Followers>
            <img src={followers} alt="" />
            <span>{profile?.followers} seguidores</span>
          </Followers>
        </Info>
        <GithubLink href="https://github.com/GuiTeFreire/">
          <span>GITHUB</span>
          <img src={redirect} alt="" />
        </GithubLink>
      </div>
    </ProfileContainer>
  )
}

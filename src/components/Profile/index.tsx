import { Avatar, Bio, GithubLink, Info, Name, ProfileContainer } from './styles'
import redirect from '../../assets/redirect.svg'
import user from '../../assets/user.svg'
import company from '../../assets/company.svg'
import followers from '../../assets/followers.svg'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://github.com/GuiTeFreire.png" alt="Profile" />
      <div>
        <Name>Guilherme Freire</Name>
        <Bio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Bio>
        <Info>
          <span>
            <img src={user} alt="" />
            GuiTeFreire
          </span>
          <span>
            <img src={company} alt="" />
            Rocketseat
          </span>
          <span>
            <img src={followers} alt="" />5 seguidores
          </span>
        </Info>
        <GithubLink href="https://github.com/GuiTeFreire/">
          GITHUB <img src={redirect} alt="" />
        </GithubLink>
      </div>
    </ProfileContainer>
  )
}

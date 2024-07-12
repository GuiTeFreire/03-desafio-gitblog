import { HeaderContainer, HeaderImage } from './styles'
import cover from '../../assets/cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderImage src={cover} alt="" />
    </HeaderContainer>
  )
}

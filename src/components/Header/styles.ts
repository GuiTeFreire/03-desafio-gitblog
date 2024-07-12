import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem; /* Ajuste a altura conforme necessário */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40vh; /* Ajuste a altura para telas menores, se necessário */
  }
`

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

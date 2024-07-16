import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  position: relative;
  width: 416px;
  height: 260px;

  background: #112131;
  border-radius: 16px 16px;

  &:hover {
    border: 2px solid #3a536b;
  }
`

export const Title = styled.h3`
  position: absolute;
  height: 64px;
  left: 32px;
  right: 101px;
  top: 32px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;

  color: #e7edf4;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* Número de linhas antes do truncamento */
  -webkit-box-orient: vertical;
`

export const Content = styled.p`
  position: absolute;
  left: 32px;
  right: 32px;
  top: 116px;
  bottom: 38px;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 4; /* Número de linhas antes do truncamento */
  -webkit-box-orient: vertical;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  color: #afc2d4;
`
export const PostTime = styled.span`
  position: absolute;
  width: 57px;
  height: 22px;
  right: 32px;
  top: 37px;

  /* Text/Text S */
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 120%;
  /* or 22px */

  /* Base/Span */
  color: #7b96b2;
`

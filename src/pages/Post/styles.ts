import styled from 'styled-components'

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  gap: 24px;

  position: absolute;
  width: 864px;
  height: 422px;
  left: calc(50% - 864px / 2);
  top: 376px;
`

export const PostText = styled.div`
  width: 800px;
  height: 208px;

  font-family: 'Nunito';
  font-style: normal;
  font-size: 16px;
  line-height: 160%;

  color: #afc2d4;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

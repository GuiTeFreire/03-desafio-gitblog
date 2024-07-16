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
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;

  color: #afc2d4;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const SearchFormContainer = styled.input`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;

  position: absolute;
  width: 864px;
  height: 50px;
  left: calc(50% - 864px / 2);
  top: 533px;

  background: #040f1a;
  border: 1px solid #1c2f41;
  border-radius: 6px;

  &::placeholder {
    width: 832px;
    height: 26px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #3a536b;

    flex: none;
    order: 0;
    flex-grow: 1;
  }

  &:focus {
    background: #040f1a;
    border: 1px solid #3294f8;
    color: #afc2d4;
  }
`

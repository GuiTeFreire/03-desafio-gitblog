import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 1440px;
  height: 1709px;

  background: #071422;
`
export const SearchTitle = styled.span`
  position: absolute;
  width: 99px;
  height: 29px;
  left: calc(50% - 864px / 2);
  top: 492px;

  /* Title / Title S */
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  /* Base/Subtitle */
  color: #c4d4e3;
`

export const PostCount = styled.span`
  position: absolute;
  width: 86px;
  height: 22px;
  right: calc(50% - 864px / 2);
  top: 496px;

  /* Text/Text S */
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */
  text-align: right;

  /* Base/Span */
  color: #7b96b2;
`

export const PostList = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  position: absolute;
  flex-wrap: wrap;

  width: 864px;
  height: 844px;
  margin-top: 321px;
  margin-bottom: 234px;
  left: calc(50% - 864px / 2);
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

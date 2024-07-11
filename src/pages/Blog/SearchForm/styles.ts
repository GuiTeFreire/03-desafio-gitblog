import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  h1 {
    /* Publicações */

    position: absolute;
    width: 99px;
    height: 29px;
    left: 288px;
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
  }

  span {
    /* 6 publicações */

    position: absolute;
    width: 86px;
    height: 22px;
    right: 288px;
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
  }

  input {
    /* Input */

    box-sizing: border-box;

    color: #3a536b;
    /* Auto layout */
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

    /* Base/Input */
    background: #040f1a;
    /* Base/Border */
    border: 1px solid #1c2f41;
    border-radius: 6px;
  }
`

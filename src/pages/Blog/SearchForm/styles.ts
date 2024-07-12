import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;

  input {
    box-sizing: border-box;

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

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

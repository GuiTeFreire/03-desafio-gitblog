import styled from 'styled-components'

export const InfoContainer = styled.div`
  position: absolute;
  width: 54rem;
  height: 10.5rem;
  left: calc(50% - 864px / 2);
  top: 13rem;
  background: #0b1b2b;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const Title = styled.strong`
  position: absolute;
  height: 31px;
  left: 32px;
  right: 32px;
  top: 71px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: #e7edf4;
`

export const Info = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 90px;

  position: absolute;
  width: 390px;
  height: 26px;
  left: 32px;
  top: 110px;
`
export const Username = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 111px;
  height: 26px;

  flex: none;
  order: 0;
  flex-grow: 0;

  img {
    width: 18px;
    height: 18px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  span {
    width: 85px;
    height: 26px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #7b96b2;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`

export const Date = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 87px;
  height: 26px;

  flex: none;
  order: 1;
  flex-grow: 0;

  img {
    width: 18px;
    height: 18px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  span {
    width: 161px;
    height: 26px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #7b96b2;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`

export const Comments = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 128px;
  height: 26px;

  flex: none;
  order: 2;
  flex-grow: 0;

  img {
    width: 18px;
    height: 18px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  span {
    width: 102px;
    height: 26px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #7b96b2;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`

export const GithubLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 115px;
  height: 19px;
  right: 32px;
  top: 32px;

  &:hover {
    border-bottom: 1px solid #3294f8;
  }

  span {
    width: 95px;
    height: 19px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;

    color: #3294f8;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`
export const Back = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 67px;
  height: 19px;
  left: 32px;
  top: 32px;

  &:hover {
    border-bottom: 1px solid #3294f8;
  }

  span {
    width: 47px;
    height: 19px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;

    color: #3294f8;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`

import styled from 'styled-components'

export const ProfileContainer = styled.div`
  position: absolute;
  width: 54rem;
  height: 13.25rem;
  left: calc(50% - 864px / 2);
  top: 13rem;
  background: #0b1b2b;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const Avatar = styled.img`
  position: absolute;
  width: 148px;
  height: 148px;
  left: 40px;
  top: calc(50% - 148px / 2);

  background: url(.png);
  border-radius: 8px;
`
export const Name = styled.strong`
  position: absolute;
  width: 236px;
  height: 31px;
  left: 220px;
  top: calc(50% - 31px / 2 - 50.5px);

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: #e7edf4;
`

export const Bio = styled.p`
  position: absolute;
  width: 612px;
  height: 52px;
  left: 220px;
  top: 79px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  color: #afc2d4;
`

export const Info = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;

  position: absolute;
  width: 393px;
  height: 26px;
  left: 220px;
  top: calc(50% - 26px / 2 + 62px);

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 111px;
    height: 26px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: #c4d4e3;
  }
`

export const GithubLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 67px;
  height: 19px;
  right: 32px;
  top: 40px;

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
`

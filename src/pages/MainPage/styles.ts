import styled from 'styled-components'

import { bgColors, textColors } from 'styles/theme/color'

export const MainPageContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 1200px;
  height: 552px;
  margin: 0 auto;
  background-color: ${bgColors.white};
  border: 1px solid black;
`

export const AsideContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 450px;
  height: 327px;
`

export const BannerContainer = styled.div``

export const BannerSubDescription = styled.p`
  position: relative;
  bottom: 56px;
  text-align: center;
  font-size: 15px;
  color: ${textColors.subGrey};
`

export const TripleContentBanner = styled.img`
  width: 400px;
  height: 327px;
`

export const MatricContents = styled.div`
  margin: 20px 0 20px;
`

export const AwardContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div:first-child {
    margin-right: 8px;
  }
`

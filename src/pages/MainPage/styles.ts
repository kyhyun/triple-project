import styled, { keyframes } from 'styled-components'

import { bgColors, textColors } from 'styles/theme/color'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

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

export const BannerContainer = styled.div`
  animation: ${fadeIn} 700ms 100ms both;
`

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
  animation: ${fadeIn} 700ms 200ms both;
`

export const AwardContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  animation: ${fadeIn} 700ms 300ms both;

  div:first-child {
    margin-right: 8px;
  }
`

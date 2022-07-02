import styled from 'styled-components'

import { textColors } from 'styles/theme/color'

export const MatricsContainer = styled.div`
  margin-bottom: 20px;
`

export const MatricsItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const MatricsHighLight = styled.strong`
  font-size: 36px;
  font-weight: 700;
  color: ${textColors.mainGrey};
`

export const MatricsSubDesciption = styled.p`
  font-size: 36px;
  font-weight: 400;
  color: ${textColors.mainGrey};
`

import styled from 'styled-components'

import { textColors } from 'styles/theme/color'

export const AwardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    transform: translateX(60px);
  }
`

export const AwardImage = styled.img`
  width: 46px;
  height: 46px;
`

export const AwardDescription = styled.p`
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
  color: ${textColors.descGrey};
`

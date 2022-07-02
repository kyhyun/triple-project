import styled from 'styled-components'

import { textColors } from 'styles/theme/color'

export const AwardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    transform: translateX(40px);
  }
`

export const AwardImage = styled.img`
  width: 60px;
  height: 60px;
`

export const AwardDescription = styled.p`
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
  color: ${textColors.descGrey};
`

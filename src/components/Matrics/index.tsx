import {
  MatricsContainer,
  MatricsItem,
  MatricsHighLight,
  MatricsSubDesciption,
} from './styles'

interface Props {
  highLightText: string
  subText: string
}

function Matrics({ highLightText, subText }: Props) {
  return (
    <MatricsContainer>
      <MatricsItem>
        <MatricsHighLight>{highLightText}</MatricsHighLight>
        <MatricsSubDesciption>{subText}</MatricsSubDesciption>
      </MatricsItem>
    </MatricsContainer>
  )
}

export default Matrics

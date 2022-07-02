import {
  MatricsContainer,
  MatricsItem,
  MatricsHighLight,
  MatricsSubDesciption,
} from './styles'

import useCounter from 'hooks/useCounter'

interface Props {
  figure: number
  unit: string
  modifier: string
}

function Matrics({ figure, unit, modifier }: Props) {
  const count = useCounter(figure, 2000)
  return (
    <MatricsContainer>
      <MatricsItem>
        <MatricsHighLight>
          {count}
          {unit}
        </MatricsHighLight>
        <MatricsSubDesciption>{modifier}</MatricsSubDesciption>
      </MatricsItem>
    </MatricsContainer>
  )
}

export default Matrics

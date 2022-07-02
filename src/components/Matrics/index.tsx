import {
  MatricsContainer,
  MatricsItem,
  MatricsHighLight,
  MatricsSubDesciption,
} from './styles'

import useCounter from 'hooks/useCounter'
import { Imatrics } from 'types/types'

function Matrics({ figure, unit, modifier }: Imatrics) {
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

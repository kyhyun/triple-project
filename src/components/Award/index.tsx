import { AwardItem, AwardImage, AwardDescription } from './styles'

import { Iaward } from 'types/types'

function Award({
  imgUrl,
  imgAltInfo,
  topDescription,
  bottomDescription,
}: Iaward) {
  return (
    <AwardItem>
      <AwardImage src={imgUrl} alt={imgAltInfo} />
      <AwardDescription>
        {topDescription}
        <br />
        {bottomDescription}
      </AwardDescription>
    </AwardItem>
  )
}

export default Award

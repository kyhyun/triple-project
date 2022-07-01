import { AwardItem, AwardImage, AwardDescription } from './styles'

interface Props {
  imgUrl: string
  imgAltInfo: string
  topDescription: string
  bottomDescription: string
}

function Award({
  imgUrl,
  imgAltInfo,
  topDescription,
  bottomDescription,
}: Props) {
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

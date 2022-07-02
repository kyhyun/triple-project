import {
  MainPageContainer,
  BannerContainer,
  TripleContentBanner,
  BannerSubDescription,
  AsideContentsWrapper,
  MatricContents,
  AwardContents,
} from './styles'

import {
  ITripleContentBanner,
  IAppleBadge,
  IPlayStoreBadge,
} from 'assets/images'
import Award from 'components/Award/index'
import Matrics from 'components/Matrics'

function MainPage() {
  return (
    <MainPageContainer>
      <BannerContainer>
        <TripleContentBanner
          src={ITripleContentBanner}
          alt="triple-content-banner"
        />
        <BannerSubDescription>2021년 12월 기준</BannerSubDescription>
      </BannerContainer>
      <AsideContentsWrapper>
        <MatricContents>
          <Matrics figure={700} unit="만 명" modifier="의 여행자" />
          <Matrics figure={100} unit="만 개" modifier="의 여행 리뷰" />
          <Matrics figure={470} unit="만 개" modifier="의 여행 일정" />
        </MatricContents>
        <AwardContents>
          <Award
            imgUrl={IPlayStoreBadge}
            imgAltInfo="play-store-badge"
            topDescription="2018 구글 플레이스토어"
            bottomDescription="올해의 앱 최우수상 수상"
          />
          <Award
            imgUrl={IAppleBadge}
            imgAltInfo="apple-badge"
            topDescription="2018 애플 앱스토어"
            bottomDescription="오늘의 여행앱 선정"
          />
        </AwardContents>
      </AsideContentsWrapper>
    </MainPageContainer>
  )
}

export default MainPage

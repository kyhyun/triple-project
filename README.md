# 트리플 프론트엔드 과제

![triple](https://user-images.githubusercontent.com/77887712/177007904-079d6ddc-60f7-4931-a84b-a916cc18884d.gif)

## ⚙ 기술 스택

  <img src="https://img.shields.io/badge/TypeScript-v4.7.4-blue"/>
  <img src="https://img.shields.io/badge/Styled%20Cmponents-v5.3.5-blue"/>

### 선정 이유

- **TypeScript**

  - 정적 타입의 지원을 받아 프로그램을 실행하기 전에 에러를 발견할 수 있어 보다 안정적으로 코드를 작성할 수 있기 때문에 사용하였습니다.

- **Styled Components**
  - 컴포넌트 단위의 직관적인 스타일링과 스타일 적용 범위를 최대한 줄여서 사이드 이펙트를 작게 하고자 사용하였습니다.

## 📍 프로젝트 실행 방법

**1. Repository 클론**

```bash
$ git clone https://github.com/kyhyun/triple-project.git
```

**2. Dependencies 설치**

```bash
$ npm install
```

**3. 실행**

```bash
$ npm start
```

## 🎄 프로젝트 구조

```bash
src
├─assets // 이미지 등
│  └─images
├─components // 컴포넌트
│  ├─Award
│  └─Matrics
├─hooks // 커스텀 훅
├─pages // 페이지
│  └─MainPage
├─styles // 전역 스타일 및 테마
│  ├─base
│  └─theme
├─types // 타입
└─utils // 사용자 정의 함수
```

## 📖 구현 방법

**📌 영역별 등장 애니메이션**

- CSS의 Keyframes를 사용하여 구현
- animation-duration : 700ms
- animation-delay : 보여 주어야 할 애니메이션의 순서에 따라 100ms씩 증감시켜 딜레이 간격을 처리
- transform: translateY축의 값과 opacity 값을 설정하여 페이드인 효과를 표현

**📌 숫자가 올라가는 애니메이션**

- useCounter 커스텀 훅으로 분리하여 구현
- 숫자가 올라가는 속도를 줄이는 easeOutExpo 함수는 숫자가 올라가는 효과 이외에도 공통으로 분리 될 수 있는 기능으로 판단하여, utils의 animation 파일로 분리
- setInterval을 이용해서 숫자가 증가하는 기능을 구현
  - progress(진행률)이 1에 도달하면, clearInterval로 비동기를 제어


export const CertificateData: Certificate[] = [
    { name: "정보처리기능사", date: "2018.10", content: "18852530052K" },
    { name: "정보기기운용기능사", date: "2017.07", content: "17843510080C" }
]
export const LinkData: Link[] = [
    // { name: "linkedin", url: "https://www.linkedin.com/in/gostroad/" },
    { name: "gitblog", url: "https://gastroad.github.io/" },
    { name: "resume/portfolio", url: "https://gastroad.github.io/resume/" },
    { name: "slides", url: "https://slides.com/coldpotato" },
    // { name: "Medium", url: "https://medium.com/@gostroad37" },
]
export const carrerData: Career[] = [
    {
        title: "Sellerbook", startDate: "2021.07", endDate: "", content: `마케터를 위한 광고 집행 서비스입니다.
여러 광고 계정을 등록하여 광고 관리, 고객 관리, 영업 등을 지원하고 광고 채널에 대한 성과를 확인할 수 있는 서비스입니다. 
React 와 recoil, TypeScript를 사용해 개발했습니다.`
    }, {
        title: "Reviewdoku", startDate: "2019.01", endDate: "", content: `카페24 스토어에서 판매되는 리뷰 관리 서비스입니다. 
쇼핑몰에 설치되는 리뷰 게시판 앱과, 등록된 리뷰들을 관리하고 적립금 지급, 리뷰 묶기 등을 설정할 수 있는 관리자 페이지로 나뉘여 있습니다. 
그중 관리자 페이지를 React, TypeScript를 사용하여 개발했습니다. 
초기 개발엔 class component로 개발하였고 추후  functional component, React-hook으로 변경하는 작업을 진행했습니다.
context api를 store처럼 사용하였으나 이후 redux => recoil까지 다양한 store를 사용하여 개발하였습니다.`
    },
    {
        title: "WannaLive", startDate: "2019.11", endDate: "", content: `카페24 스토어에서 판매되는 현재 접속자 수 안내 서비스입니다.
현재 상품을 몇 명이 보고 있는지 실시간으로 알려줍니다.
더미 데이터를 넣을 수 있어서 많은 사람이 보고 있는 것처럼 보이게 해 구매전환율을 높일 수 있습니다.
쇼핑몰에 설치되는 접속자 수 안내 앱과 상품별 설정을 할 수 있는 관리자 페이지로 나뉘여 있습니다.
관리자 페이지는 React 쇼핑몰에 설치되는 상품별 안내 앱은 바닐라 JS를 통해 작성했습니다.`
    },
    {
        title: "WannaBuy", startDate: "2018.10", endDate: "", content: `카페24 스토어에서 판매되는 무료배송 맞춤 서비스입니다.
상품 구매금액이 무료 배송 금액 이하인 경우 무료 배송비를 맞출 수 있게 상품을 주문하기 전에 추가적으로 상품을 추천해 주는 서비스입니다.
쇼핑몰에 설치되는 무료배송 앱과 무료 배송 상품 추천을 해주는 관리자 페이지로 나뉘여 있습니다.
관리자 페이지는 React 쇼핑몰에 설치되는 무료배송 앱은 바닐라 JS를 통해 작성했습니다.`
    },
    {
        title: "WannaTime", startDate: "2018.09", endDate: "", content: `카페24 스토어에서 판매되는 당일 발송 안내 타이머 서비스입니다.
'OO 시간 OO 분 내에 주문 시 오늘 발송됩니다' 메시지를, 이후에는 "지금 주문 시 내일 발송됩니다" 메시지를 띄워주는 서비스입니다.
쇼핑몰에 설치되는 타이머 앱과 당일 발송 시간 설정 하는 관리자 페이지로 나뉘여 있습니다.
관리자 페이지는 React 쇼핑몰에 설치되는 타이머 앱은 바닐라 JS를 통해 작성했습니다.`
    },
    {
        title: "쉐어링고", startDate: "2018.03", endDate: "2018.08", content: `비디오 광고 수익 리워드를 분배하는 동영상 플랫폼입니다.
영상을 업로드하는 파트너 페이지, 소비자가 영상을 시청할 수 있는 허브페이지, 두 곳을 관리할 수 있는 어드민 페이지로 나뉘여 있습니다.
그중 어드민 페이지를 React, redux를 사용하여 개발했습니다.`
    },
    {
        title: "매거진딩고", startDate: "2018.01", endDate: "2018.03", content: `페이스북 인스턴트 아티클 제작 및 발행을 위해 개발된 서비스입니다.
draft.js를 통해 텍스트 에디터를 제공하고 채널을 연동해서 각 채널에 인스턴트 아티클을 발행하는 기능을 제공했습니다.
React를 사용하여 개발하였습니다.`
    },
    {
        title: "업로딩고", startDate: "2017.09", endDate: "2018.11", content: `사내에서 관리하는 페이스북 / 유튜브 채널과, 각 채널에 발행해야 할 영상의 개수가 증가하여 영상의 통합 관리, 배포관리를 위해 개발된 서비스입니다.
페이스북 / 유튜브 채널의 등록, 배포될 영상의 업로드, 업로드된 영상을 선택된 채널에 즉시 발행 / 예약 발행, 채널 별 성과 통계를 제공하였습니다.
React, flux store로 개발되어 있는 것을 redux로 변경하였습니다.
        `
    }
]

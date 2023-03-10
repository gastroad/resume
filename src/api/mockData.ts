
export const CertificationData: Certification[] = [
    { name: "정보처리기능사", date: "2018.10", content: "18852530052K" },
    { name: "정보기기운용기능사", date: "2017.07", content: "17843510080C" }
]

export const carrerData: Career[] = [
    {
        title: "Sellerbook", startDate: "2021.07", endDate: "", content: `마케터를 위한 광고 집행 서비스입니다.

        여러 광고 계정을 등록하여 광고 관리, 고객 관리, 영업 등을 지원하고 광고 채널에 대한 성과를 확인할 수 있는 서비스입니다.
        
        프론트엔드 개발자 4명 백엔드 개발자 4명 디자이너 1명 퍼블리셔 1명 기획자 1명이서 개발을 진행하였으며
        프론트엔드 부분을  4명이서 페이지별로 작업을 나누어서 개발하였습니다.
        
        주로 React TypeScript를 사용하여 개발을 진행했습니다.`
    },
    {
        title: "Reviewdoku", startDate: "2019.01", endDate: "", content: `카페24 스토어에서 판매되는 리뷰 관리 서비스입니다.

        쇼핑몰에 설치되는 리뷰 게시판 부분과
        등록된 리뷰들을 관리하고 적립금 지급, 리뷰 묶기 등을 설정할 수 있는 관리자 페이지로 나누어져 있습니다.
        
        프론트엔드 개발자 2명 백엔드 개발자 2명 디자이너 1명 퍼블리셔 1명이서 개발을 진행하였으며
        관리자 페이지의 프론트엔드 부분을 전반적으로 담당 개발하였습니다.
        
        주로 React TypeScript를 사용하여 개발하였으며
        초기 개발엔 class component를 사용하여 개발하였고
        추후 React-hook 이 나와 Functional Component로 전환하는 작업을 진행했습니다.
        
        context api를 store처럼 사용하여 state를 관리하였으나
        이후 redux로 전환하는 작업을 진행하였고
        추후 recoil로 전환하기도 하여 다양한 상태 관리 도구를 사용하여 개발하였습니다.
        `
    },
    {
        title: "WannaLive, WannaBuy, WannaTime", startDate: "2019.09", endDate: "", content: `WannaLive
        카페24 스토어에서 판매되는 현재 접속자 수 안내 서비스입니다.
        현재 상품을 몇 명이 보고 있는지 실시간으로 알려줍니다.
        mock 데이터를 넣을 수 있어서 많은 사람이 보고 있는 것처럼 보이게 해 구매전환율을 높일 수 있습니다.
        
        WannaBuy
        카페24 스토어에서 판매되는 무료배송 맞춤 서비스입니다.
        상품 구매금액이 무료 배송 금액 이하인 경우 무료 배송비를 맞출 수 있게 상품을 주문하기 전에 추가적으로 상품을 추천해 주는 서비스입니다.
        
        WannaTime
        카페24 스토어에서 판매되는 당일 발송 안내 타이머 서비스입니다.
        지정된 시간 이전에 주문 시 "OO 시간 OO 분 내에 주문 시 오늘 발송됩니다" 메시지를 
        이후에는 "지금 주문 시 내일 발송됩니다" 메시지를 띄워주는 서비스입니다.
        
        쇼핑몰에 설치되는 부분과 설정을 할 수 있는 관리자 페이지로 나뉘여 있습니다.
        
        프론트엔드 개발자 2명 백엔드 개발자 2명 디자이너 1명 퍼블리셔 1명 이서 개발을 진행하였으며
        프론트엔드 부분을 전반적으로 페어 프로그래밍을 통해 개발하였습니다.
        
        관리자 페이지는 주로 React를 사용하여 개발하였으며
        쇼핑몰에 설치되는 부분은 타 서비스와의 충돌을 고려해 바닐라 JS를 통해 작성했습니다.
        `
    },

    {
        title: "쉐어링고", startDate: "2018.03", endDate: "2018.08", content: `비디오 광고 수익 리워드를 분배하는 동영상 플랫폼입니다.

        영상을 업로드하는 파트너 페이지, 소비자가 영상을 시청할 수 있는 허브페이지, 두 곳을 관리할 수 있는 관리자 페이지로
        나 뉘여있습니다.
        
        프론트엔드 개발자 4명 백엔드 개발자 4명 디자이너 1명 퍼블리셔 1명이서 개발을 진행하였으며
        관리자 페이지의 프론트엔드 부분을 전반적으로 개발하였습니다.
        
        주로 React를 사용하여 개발하였으며
        Redux를 통해 상태 관리를 진행하였습니다.`
    },
    {
        title: "매거진딩고", startDate: "2018.01", endDate: "2018.03", content: `페이스북 인스턴트 아티클 제작 및 발행을 하는 서비스입니다.

        사내에서 관리하는 페이스북 채널에 인스턴트 아티클을 제작을 에디터를 통해 html 편집 없이 가능하게 하는 서비스입니다.
        
        프론트엔드 개발자 1명 백엔드 개발자 1명 디자이너 1명이서 개발을 진행하였으며
        프론트엔드 부분을 전반적으로 개발하였습니다.
        
        주로 React를 사용하여 개발하였으며
        draft.js를 통해 텍스트 에디터를 개발하였습니다.
        `
    },
    {
        title: "업로딩고", startDate: "2017.09", endDate: "2018.11", content: `사내에서 관리하는 페이스북/유튜브 채널과, 각 채널에 발행해야 할 영상의 개수가 증가하여 영상의 통합 관리,
        배포관리를 위해 개발된 서비스입니다.
        
        페이스북/유튜브 채널의 등록, 배포될 영상의 업로드, 업로드된 영상을 선택된 채널에 즉시 발행/예약 발행, 채널 별 성과 통계를 제공하였습니다.
        
        프론트엔드 개발자 4명 백엔드 개발자 4명 디자이너 1명 퍼블리셔 1명 기획자 1명이서 개발을 진행하였으며
        
        프론트엔드 부분을 유지 보수하였습니다.
        
        주로 React를 사용하여 개발되었으며
        flux를 redux로 전환하는 작업 및 간단한 유지 보수를 진행하였습니다.
        
        `
    }
]
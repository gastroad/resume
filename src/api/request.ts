const getCarrerData = async (): Promise<Career[]> => {
    return new Promise(resolve => {
        setTimeout(() => { resolve(carrerData) }, 1000)
    })
}
const getEtCeteraData = async (): Promise<Certificate[]> => {
    return new Promise(resolve => {
        setTimeout(() => { resolve(CertificateData) }, 1000)
    })
}


export { getCarrerData, getEtCeteraData }





const CertificateData: Certificate[] = [
    { name: "정보처리기능사", date: "2018.10", content: "18852530052K" },
    { name: "정보기기운용기능사", date: "2017.07", content: "17843510080C" }
]
const carrerData: Career[] = [
    {
        title: "Sellerbook", startDate: "2021.07", endDate: "", content: `마케터를 위한 광고집행 서비스 입니다.
여러 광고 계정을 등록하여 광고 관리, 고객 관리, 영업 등을 지원하고 광고 채널에 대한 성과를 확인할수있는 서비스입니다. 
React 와 recoil, TyepScript 를 사용해 개발했습니다.`
    }, {
        title: "Reviewdoku", startDate: "2019.01", endDate: "", content: `카페24 스토어에서 판매되는 리뷰관리 서비스입니다. 
쇼핑몰에 설치되는 리뷰 게시판 앱과, 등록된 리뷰들을 관리하고 적립금 지급, 리뷰 묶기 등을 설정할 수 있는 관리자 페이지로 나뉘여 있습니다. 
그중 관리자 페이지를 React, TyepScript 를 사용하여 개발했습니다. 
초기 개발엔 class component 로 개발하였고 추후  functional component, React-hook 으로 변경하는 작업을 진행했습니다.
context api 를 store 처럼 사용하였으나 이후 redux => recoil 까지 다양한 store 를 사용하여 개발하였습니다.`
    },
    {
        title: "WannaLive", startDate: "2019.11", endDate: "", content: `카페24 스토어에서 판매되는 현재 접속자 수 안내 서비스 입니다. 
현재 상품을 몇명이 보고있는지 실시간으로 알려줍니다.
더미 데이터를 넣을수 있어서 많은 사람이 보고있는것처럼 보이게해 구매전환율을 높일수 있습니다. 
쇼핑몰에 설치되는 접속자수 안내 앱과 상품별 설정을 할수 있는 관리자 페이지로 나뉘여 있습니다. 
관리자 페이지는 React 쇼핑몰에 설치되는 상품별 안내 앱은 바닐라JS 를 통해 작성했습니다.`
    },
    {
        title: "WannaBuy", startDate: "2018.10", endDate: "", content: `카페24 스토어에서 판매되는 무료배송 맞춤 서비스 입니다. 
상품 구매금액이 무료 배송 금액 이하인 경우 무료 배송비를 맞출수 있게 상품을 주문하기전에 추가적으로 상품을 추천해주는 서비스 입니다.
쇼핑몰에 설치되는 무료배송 앱과 무료 배송 상품 추천을 해주는 관리자 페이지로 나뉘여 있습니다. 
관리자 페이지는 React 쇼핑몰에 설치되는 무료배송 앱은 바닐라JS를 통해 작성했습니다.`
    },
    {
        title: "WannaTime", startDate: "2018.09", endDate: "", content: `카페24 스토어에서 판매되는 당일발송 안내 타이머 서비스 입니다. 
'OO시간 OO분 내에 주문 시 오늘 발송됩니다' 메세지를, 이후에는 "지금 주문 시 내일 발송됩니다" 메세지를 띄워주는 서비스입니다. 
쇼핑몰에 설치되는 타이머 앱과 당일 발송 시간 설정을 하는 관리자 페이지로 나뉘여 있습니다.
관리자 페이지는 React 쇼핑몰에 설치되는 타이머 앱은 바닐라JS를 통해 작성했습니다.`
    },
    {
        title: "쉐어링고", startDate: "2018.03", endDate: "2018.08", content: `비디오 광고수익 리워드를 분배하는 동영상 플랫폼입니다. 
영상을 업로드 하는 파트너 페이지, 소비자가 영상을 시청할수있는 허브페이지, 두곳을 관리할수있는 어드민 페이지로 나뉘여있습니다. 
그중 어드민 페이지를 React, redux를 사용하여 개발했습니다.`
    },
    {
        title: "매거진딩고", startDate: "2018.01", endDate: "2018.03", content: `페이스북 인스턴트 아티클 제작 및 발행을 위해 개발된 서비스 입니다.
 draft.js 를 통해 텍스트 에디터를 제공하고 채널을 연동해서 각 채널에 인스턴트 아티클을 발행 하는 기능을 제공했습니다. 
 React를 사용하여 개발하였습니다.`
    },
    {
        title: "업로딩고", startDate: "2017.09", endDate: "2018.11", content: `사내에서 관리하는 페이스북 / 유튜브 채널과, 각 채널에 발행해야 할 영상의 개수가 증가하여 영상의 통합관리, 배포관리를 위해 개발된 서비스입니다.
페이스북 / 유튜브 채널의 등록, 배포될 영상의 업로드, 업로드된 영상을 선택된 채널에 즉시발행 / 예약발행, 채널 별 성과 통계를 제공하였습니다. 
React, flux store 로 개발되어있는것을 redux로 변경하였습니다.`
    }
]

import {
    CertificateData,
    carrerData
} from "./mockData"

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






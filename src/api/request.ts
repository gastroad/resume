import { createAsyncThunk } from '@reduxjs/toolkit'

import {
    CertificationData,
    carrerData
} from "./mockData"

const getCarrerData = async (): Promise<Career[]> => {
    return new Promise(resolve => {
        setTimeout(() => { resolve(carrerData) }, 1000)
    })
}

const fetchCarrerData = createAsyncThunk(
    'fetchCarrerData',
    async () => {
        return await getCarrerData();
    },
);

const getCertificationData = async (): Promise<Certification[]> => {
    return new Promise(resolve => {
        setTimeout(() => { resolve(CertificationData) }, 1000)
    })
}

const fetchCertificationData = createAsyncThunk(
    'fetchCertificationData',
    async () => {
        return await getCertificationData();
    },
);




export { getCarrerData, getCertificationData, fetchCarrerData, fetchCertificationData }






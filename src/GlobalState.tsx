import React, { createContext, useState, useEffect } from 'react'
import { customers } from './api/data'

export const GlobalState = createContext<any>([])


export const DataProvider = ({ children }: any) => {
    const [auth, setAuth] = useState<boolean>(false)
    const [data, setData] = useState<any>([])

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if (firstLogin) {
            const confirmLogin = () => {
                setAuth(true)
                setData({customers})
            }
            confirmLogin()
        }
    }, [])



    const state = {
        auth: [auth, setAuth],
        data: [data, setData]
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
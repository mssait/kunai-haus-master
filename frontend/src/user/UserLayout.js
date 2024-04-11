import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import MainLayout from '../layout/MainLayout'
import menuItems from '../menu-items'
import fetcher from '../util/fetcher'

export default function UserLayout() {

    const [licence, setLicense] = useState(null)

    useEffect(() => {
        fetcher('/licence')
            .then(r => r.json())
            .then(({ status }) => {
                setLicense(status !== 'failed')
            })
    }, [])

    return (
        licence === null ? (
            <Loader />
        ) : (
            <MainLayout licence={licence} menuItems={menuItems} />
        )
    )
}

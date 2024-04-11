import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import fetcher from '../util/fetcher'
import BankDetails from './BankDetails'
import DevelopmentPartnersDetails from './DevelopmentPartnersDetails'
import GovernmentDetails from './GovernmentDetails'
import PrivateCompaniesDetails from './PrivateCompaniesDetails'
import SMEDetails from './SMEDetails'

export default function EditDetails() {

    const [company, setCompany] = useState(null)

    useEffect(() => {
        fetcher('/api/companies/my')
            .then(r => r.json())
            .then(setCompany)
    }, [])

    const DetailsPage = ({ type }) => {
        switch (type) {
            case "SME":
                return <SMEDetails />;
            case "Bank":
                return <BankDetails />;
            case "Government Officers":
                return <GovernmentDetails />;
            case "Development Partners":
                return <DevelopmentPartnersDetails />
            case "Private Companies":
                return <PrivateCompaniesDetails />
            default:
                return null;
        }
    }

    return company === null ? (
        <Loader />
    ) : (
        <DetailsPage type={company.type} />
    )
}

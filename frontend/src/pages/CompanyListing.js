import React from 'react'
import { useParams } from 'react-router-dom'
import BankListing from './BankListing'
import DevelopmentPartnerListing from './DevelopmentPartnerListing'
import GovernmentListing from './GovernmentListing'
import PrivateCompanies from './PrivateCompanyListing'
import SMEListing from './SMEListing'

export default function CompanyListing() {
    const { company } = useParams()

    const mapping = {
        sme: <SMEListing />,
        bank: <BankListing />,
        government: <GovernmentListing />,
        "development-partner": <DevelopmentPartnerListing />,
        "private-company": <PrivateCompanies />,
    }

    return mapping[company]
}

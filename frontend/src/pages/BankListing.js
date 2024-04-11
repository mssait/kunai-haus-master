import React from 'react'
import CompanyListingTemplate from './CompanyListingTemplate'

export default function BankListing() {
    return (
        <CompanyListingTemplate
            url="/api/listings/bank"
            meta={{ title: "Banks" }} />
    )
}

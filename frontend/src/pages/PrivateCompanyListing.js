import React from 'react'
import CompanyListingTemplate from './CompanyListingTemplate'

export default function PrivateCompanyListing() {
    return (
        <CompanyListingTemplate
            url="/api/listings/private-company"
            meta={{ title: "Private Companies" }} />
    )
}

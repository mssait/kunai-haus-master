import React from 'react'
import CompanyListingTemplate from './CompanyListingTemplate'

export default function GovernmentListing() {
    return (
        <CompanyListingTemplate
            url="/api/listings/government"
            meta={{ title: "Government Departments" }} />
    )
}

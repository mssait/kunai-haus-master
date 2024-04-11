import React from 'react'
import CompanyListingTemplate from './CompanyListingTemplate'

export default function SMEListing() {
    return (
        <CompanyListingTemplate
            url="/api/listings/sme"
            meta={{ title: "SME" }} />
    )
}

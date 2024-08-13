import React from 'react'
import { useParams } from 'react-router-dom'
import CompanyListingTemplate from './CompanyListingTemplate'

export default function RegionListing() {
    const { region } = useParams()

    const mapping = {
        "new-guinea-islands": "New Guinea Islands",
        "momase": "Momase Region",
        "southern": "Southern Region",
        "highland": "Highland Region"
    }

    return (
        <CompanyListingTemplate
            url={`/api/listings/region/${region}`}
            meta={{
                title: mapping[region]
            }}
        />
    )
}

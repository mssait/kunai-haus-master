import React from 'react'
import { useQuery } from '../util/useQuery'
import CompanyListingTemplate from './CompanyListingTemplate'

export default function SearchListing() {
    const { params } = useQuery()
    const { query } = params

    return (
        <CompanyListingTemplate
            url="/api/listings/search"
            meta={{ title: `Search results for '${query}'` }} />
    )
}

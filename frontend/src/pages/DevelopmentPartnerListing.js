import React from 'react'
import CompanyListingTemplate from './CompanyListingTemplate'

export default function DevelopmentPartnerListing() {
  return (
    <CompanyListingTemplate
      url="/api/listings/development-partner"
      meta={{ title: "Development Partners" }} />
  )
}

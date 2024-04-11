import React from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import MobileCompanyListingTemplate from './MobileCompanyListingTemplate';
import WebCompanyListingTemplate from './WebCompanyListingTemplate';

export default function CompanyListingTemplate({ url, meta }) {
    return (
        <React.Fragment>
            <BrowserView>
                <WebCompanyListingTemplate url={url} meta={meta} />
            </BrowserView>
            <MobileView>
                <MobileCompanyListingTemplate url={url} meta={meta} />
            </MobileView>
        </React.Fragment>
    )
}

package com.hionstudios.kunaihaus.oauth;

import com.nimbusds.oauth2.sdk.token.BearerAccessToken;

public class ZohoOauthToken extends BearerAccessToken {
    public ZohoOauthToken(String string) {
        super(string);
    }

    @Override
    public String toAuthorizationHeader() {
        return "Zoho-oauthtoken " + getValue();
    }
}

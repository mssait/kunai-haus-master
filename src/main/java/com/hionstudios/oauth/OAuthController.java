package com.hionstudios.oauth;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hionstudios.MapResponse;
import com.hionstudios.db.DbTransaction;
import com.hionstudios.iam.IsAdmin;
import com.hionstudios.kunaihaus.oauth.KunaiHausOauthUtil;

@RestController
@RequestMapping("oauth")
public class OAuthController {
    @GetMapping("{provider}/auth")
    @IsAdmin
    public ModelAndView authOAuth2(@PathVariable String provider) throws Exception {
        return new ModelAndView("redirect:" + KunaiHausOauthUtil.getURL(provider));
    }

    @GetMapping("{provider}/callback")
    @IsAdmin
    public ResponseEntity<MapResponse> callback(@PathVariable String provider, HttpServletRequest request) {
        return ((DbTransaction) () -> KunaiHausOauthUtil.getTokens(provider, request)).write();
    }
}

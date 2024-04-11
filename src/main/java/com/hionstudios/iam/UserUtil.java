package com.hionstudios.iam;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.hionstudios.MapResponse;
import com.hionstudios.db.Handler;
import com.hionstudios.kunaihaus.model.ResetPassword;
import com.hionstudios.kunaihaus.model.Role;
import com.hionstudios.kunaihaus.model.User;
import com.hionstudios.mail.MailUtil;

public class UserUtil {
    private static Object getPrincipal() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication != null ? authentication.getPrincipal() : null;
    }

    public static HionUserDetails getUserDetails() {
        Object principal = getPrincipal();
        return (principal instanceof HionUserDetails) ? (HionUserDetails) principal : new HionUserDetails();
    }

    public static boolean isLoggedIn() {
        return getPrincipal() instanceof HionUserDetails;
    }

    public static long getUserid() {
        return getUserDetails().getUserid();
    }

    public static boolean isAdmin() {
        return getUserDetails().getRole().equals(Role.ADMIN);
    }

    public static MapResponse forgotPassword(String email) {
        String sql = "Select Name, Email, Id From Users Where Email = ?";
        MapResponse user = Handler.findFirst(sql, email);
        if (user == null) {
            return MapResponse.failure("Email not found");
        }
        long userid = user.getLong("id");
        String name = user.getString("name");
        ResetPassword resetPassword = new ResetPassword(userid);
        resetPassword.insert();
        String code = resetPassword.getString("code");
        String html = String.format(
                "Dear %s,<br /><br />We hope this message finds you well. It seems like you're in need of a little assistance with your E Hauswin account.<br />No worries, we're here to help you regain access and get you back on track!<br /><br />To reset your password and regain access to your E Hauswin account, simply <a href=\"https://www.e-hauswin.com/reset-password/%s\">Click here</a>",
                name,
                code);
        MailUtil.sendMailAsync(email, "Reset Your E Hauswin Password: Take Control of Your Account", html, true);
        return MapResponse.success();
    }

    public static MapResponse resetPassword(String code, String password) {
        ResetPassword resetPassword = ResetPassword.findFirst("code = ?", code);
        if (resetPassword != null) {
            long userid = resetPassword.getLong("user_id");
            User.update("password = ?", "id = ?", password, userid);
            resetPassword.delete();
            return MapResponse.success();
        }
        return MapResponse.failure();
    }
}

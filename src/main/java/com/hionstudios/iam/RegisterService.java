package com.hionstudios.iam;

import java.util.List;

import com.hionstudios.MapResponse;
import com.hionstudios.db.Handler;
import com.hionstudios.kunaihaus.model.Bank;
import com.hionstudios.kunaihaus.model.Company;
import com.hionstudios.kunaihaus.model.CompanyType;
import com.hionstudios.kunaihaus.model.DevelopmentPartner;
import com.hionstudios.kunaihaus.model.GovernmentDepartment;
import com.hionstudios.kunaihaus.model.PrivateCompany;
import com.hionstudios.kunaihaus.model.Role;
import com.hionstudios.kunaihaus.model.Sme;
import com.hionstudios.kunaihaus.model.User;
import com.hionstudios.mail.MailSenderFrom;
import com.hionstudios.mail.MailUtil;

public class RegisterService {
    public static MapResponse register(
            String name,
            String phone,
            String email,
            String password,
            String company,
            long type) {
        List<MapResponse> exists = Handler.findAll("Select Email, Phone From Users Where Email = ? Or Phone = ?",
                email, phone);
        if (exists.size() > 0) {
            for (MapResponse exist : exists) {
                if (phone.equals(exist.getString("phone"))) {
                    return MapResponse.failure("Phone already exists");
                }
                if (email.equals(exist.getString("email"))) {
                    return MapResponse.failure("Email already exists");
                }
            }
        }
        Company companyModel = new Company(type, company);
        if (!companyModel.insert()) {
            return MapResponse.failure();
        }
        long companyId = companyModel.getLongId();
        User user = new User(name, phone, email, password, Role.getId("User"), companyId);
        if (!user.insert()) {
            return MapResponse.failure();
        }

        String companyType = CompanyType.findById(type).getString("type");

        switch (companyType) {
            case CompanyType.SME:
                Sme sme = new Sme(companyId);
                sme.insert();
                break;
            case CompanyType.BANK:
                Bank bank = new Bank(companyId);
                bank.insert();
                break;
            case CompanyType.GOVERNMENT_OFFICERS:
                GovernmentDepartment governmentDepartment = new GovernmentDepartment(companyId);
                governmentDepartment.insert();
                break;
            case CompanyType.DEVELOPMENT_PARTNERS:
                DevelopmentPartner developmentPartner = new DevelopmentPartner(companyId);
                developmentPartner.insert();
                break;
            case CompanyType.PRIVATE_COMPANIES:
                PrivateCompany privateCompany = new PrivateCompany(companyId);
                privateCompany.insert();
                break;
            default:
                break;
        }
        sendThankYouEmail(name, email);
        return MapResponse.success();
    }

    private static void sendThankYouEmail(String name, String to) {
        String subject = "E-Hauswin - Thank you for Registering";
        String format = "Dear %s,\n" +
                "\n" +
                "We wanted to take a moment to extend a heartfelt thank you for joining e-hauswin.com! Your decision to register with us means a lot, and we're thrilled to welcome you to our community of homeowners and enthusiasts.\n"
                +
                "\n" +
                "At e-hauswin.com, we're dedicated to providing you with the best tools, resources, and support to make your home journey as smooth and enjoyable as possible. Whether you're looking for inspiration, advice, or practical solutions, we're here to help every step of the way.\n"
                +
                "\n" +
                "We're constantly working to enhance your experience on e-hauswin.com, so if you have any feedback, suggestions, or questions, please don't hesitate to reach out to us. Your input is invaluable to us as we strive to create a platform that meets your needs and exceeds your expectations.\n"
                +
                "\n" +
                "Once again, thank you for choosing e-hauswin.com. We're excited to embark on this journey together and can't wait to see what amazing things we'll accomplish together!\n"
                +
                "\n" +
                "P.S. Don't forget to explore our website and discover all the fantastic features waiting for you!";
        String html = String.format(format, name);
        MailUtil.sendMail(MailSenderFrom.noReply(), to, subject, html, false);
    }
}

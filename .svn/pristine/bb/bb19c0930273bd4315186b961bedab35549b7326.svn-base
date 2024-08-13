package com.hionstudios.mail;

import java.io.UnsupportedEncodingException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

public class MailUtil {
    private static final Logger LOGGER = Logger.getLogger(MailUtil.class.getName());
    private static final String USERNAME = "no-reply@e-hauswin.com";
    private static final String PASSWORD = "xFTHpQSWy7Pv";

    private static JavaMailSenderImpl getMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.zoho.in");
        mailSender.setPort(587);
        mailSender.setUsername(USERNAME);
        mailSender.setPassword(PASSWORD);
        Properties properties = new Properties();
        properties.put("mail.smtp.starttls.enable", "true");
        mailSender.setJavaMailProperties(properties);
        return mailSender;
    }

    public static void sendMailAsync(String to, String subject, String html, boolean isHtml) {
        new Thread(() -> sendMail(MailSenderFrom.noReply(), to, subject, html, isHtml)).start();
    }

    public static void sendMailAsync(MailSenderFrom from, String to, String subject, String html, boolean isHtml) {
        new Thread(() -> sendMail(from, to, subject, html, isHtml)).start();
    }

    public static void sendMail(MailSenderFrom from, String to, String subject, String html, boolean isHtml) {
        sendMail(from, to, subject, html, isHtml, null);
    }

    public static void sendMail(
            MailSenderFrom from, String to, String subject, String html, boolean isHtml, String reply) {
        try {
            JavaMailSenderImpl sender = getMailSender();
            MimeMessage mimeMessage = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setText(html, isHtml);
            helper.setTo(to);
            helper.setSubject(subject);
            String name = from.getName();
            if (name != null) {
                helper.setFrom(from.getEmail(), from.getName());
            } else {
                helper.setFrom(from.getEmail());
            }
            if (reply != null) {
                helper.setReplyTo(reply);
            }
            sender.send(mimeMessage);
        } catch (MessagingException | UnsupportedEncodingException e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
        }
    }
}
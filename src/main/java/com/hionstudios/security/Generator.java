package com.hionstudios.security;

import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.SecureRandom;

public enum Generator {
    OTP(6, "0123456789"),
    RESET_CODE(8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890"),
    GOOGLE_CODE(14, "abcdefghijklmnopqrstuvwxyz@#$ABCDEFGHIJKLMNOPQRSTUVWXYZ.01234567890"),
    REFERAL_CODE(8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890");

    private final int length;
    private final String charset;

    Generator(int length, String charset) {
        this.length = length;
        this.charset = charset;
    }

    public String generate() {
        SecureRandom random;
        try {
            random = SecureRandom.getInstance("SHA1PRNG", "SUN");
        } catch (NoSuchProviderException | NoSuchAlgorithmException e) {
            random = new SecureRandom();
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            sb.append(charset.charAt(random.nextInt(charset.length())));
        }
        return sb.toString();
    }
}

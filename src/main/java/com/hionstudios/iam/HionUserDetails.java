package com.hionstudios.iam;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class HionUserDetails implements UserDetails {
    public static final long serialVersionUID = 1;
    private String username;
    private String password;
    private long userid;
    private String name;
    private String phone;
    private String email;
    private String type;
    private String role;
    private final List<SimpleGrantedAuthority> authorities = new ArrayList<>();

    public HionUserDetails() {
    }

    /**
     * Username is a mandatory field
     * For the Org Users, Username already exists
     * For the Customers and the Influencers, the email is taken as the Username
     *
     * @param userDetails Map containing the user details
     * 
     */
    public HionUserDetails(HashMap<String, Object> userDetails) {
        this.type = (String) userDetails.get("type");
        this.email = (String) userDetails.get("email");
        this.username = (String) userDetails.get("email");
        this.password = (String) userDetails.get("password");
        this.userid = (long) userDetails.get("id");
        this.name = (String) userDetails.get("name");
        this.phone = (String) userDetails.get("phone");
        this.role = (String) userDetails.get("role");
        authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public long getUserid() {
        return userid;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getType() {
        return type;
    }

    public String getRole() {
        return this.role;
    }
}

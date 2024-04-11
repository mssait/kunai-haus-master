package com.hionstudios.iam;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hionstudios.MapResponse;
import com.hionstudios.db.DbUtil;
import com.hionstudios.db.Handler;

@Service
public class HionUserDetailsService implements UserDetailsService {
    @Override
    public HionUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            DbUtil.open();
            String sql = "Select Users.Id, Users.Name, Users.Phone, Users.Email, Users.Password, Roles.Role From Users Join Roles On Roles.Id = Users.Role_Id Where Users.Email = ?";
            MapResponse user = Handler.findFirst(sql, username);
            if (user == null) {
                throw new UsernameNotFoundException("ERROR 404!");
            }
            return new HionUserDetails(user);
        } finally {
            DbUtil.close();
        }
    }
}

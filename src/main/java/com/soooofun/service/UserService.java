package com.soooofun.service;

import com.soooofun.pojo.User;

/**
 * Created by mingl on 2017-9-20.
 */
public interface UserService {
    User getUserByAccount(String account);

    User getUserById(String id);
}

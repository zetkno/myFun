package com.soooofun.service.impl;

import com.soooofun.dao.UserMapper;
import com.soooofun.pojo.User;
import com.soooofun.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by mingl on 2017-9-20.
 */
@Service
public class UserServiceImpl implements UserService {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private UserMapper userMapper;
    @Override
    public User getUserByAccount(String account) {
        return userMapper.selectUserByAccount(account);
    }

    @Override
    public User getUserById(String id) {
        return userMapper.selectByPrimaryKey(id);
    }
}

package com.soooofun.service;

import com.soooofun.pojo.Comment;

import java.util.List;

/**
 * Created by mingyue on 2017/11/3.
 */
public interface CommentService {
    List<Comment> getHotComments(String d_id);

}

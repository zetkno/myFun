package com.soooofun.service.impl;

import com.soooofun.dao.CommentMapper;
import com.soooofun.pojo.Comment;
import com.soooofun.service.CommentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by mingyue on 2017/11/3.
 */
@Service
public class CommentServiceImpl implements CommentService {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Resource
    private CommentMapper commentMapper;
    @Override
    public List<Comment> getHotComments(String d_id) {
        return commentMapper.selectHotComments(d_id);
    }
}

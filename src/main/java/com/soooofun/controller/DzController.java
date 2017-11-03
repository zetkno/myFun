package com.soooofun.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.soooofun.pojo.Comment;
import com.soooofun.pojo.Dz;
import com.soooofun.pojo.User;
import com.soooofun.service.CommentService;
import com.soooofun.service.DzService;
import com.soooofun.service.UserService;
import com.soooofun.utils.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @date 2017-10-30
 * @author hanlaiming
 *
 */
@Controller
public class DzController {
    @Autowired
    private DzService dzService;
    @Autowired
    private UserService userService;
    @Autowired
    private CommentService commentService;

    /**
     * 主页
     * @return
     */
    @RequestMapping("/home")
    @ResponseBody
    public JSONObject homePage() throws IOException {
        JSONObject flag = new JSONObject();
        List<Dz> dzList = dzService.getDzListByPage(Constant.HOME_PAGE,Constant.HOME_PAGE_SHOW_NUM);
        JSONArray result = new JSONArray();
        for(Dz dz:dzList){
            JSONObject object = new JSONObject();
            String uId = dz.getPublisherId();
            User user = userService.getUserById(uId);
            object.put("avatar",user.getAvatar());
            object.put("userName",user.getUserName());
            object.put("level","lv1.初出茅庐");
            object.put("id",dz.getdId());
            object.put("title",dz.getdTitle());
            object.put("content",dz.getdContent());
            object.put("tag",dz.getdTag());
            object.put("niceNum",dz.getdNiceNum());
            object.put("unniceNum",dz.getdUnniceNum());
            object.put("collectionNum",dz.getdCollectionNum());
            object.put("commentNum",dz.getdCommentNum());
            List<Comment> commentList = commentService.getHotComments(dz.getdId());
            object.put("hotComments",commentList);
            result.add(object);
        }
        flag.put("result",result);
        return flag;
    }

    @RequestMapping(value = "/{pageNum}", method = RequestMethod.GET)
    @ResponseBody
    public List<Dz> getDzListByPage(@PathVariable("pageNum") int pageNum){
        List<Dz> dzList = dzService.getDzListByPage(pageNum,Constant.HOME_PAGE_SHOW_NUM);
        return dzList;
    }
}

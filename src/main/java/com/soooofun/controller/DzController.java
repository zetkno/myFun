package com.soooofun.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.soooofun.pojo.Dz;
import com.soooofun.service.DzService;
import com.soooofun.utils.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * @date 2017-10-30
 * @author hanlaiming
 *
 */
@Controller
@RequestMapping("/home")
public class DzController {
    @Autowired
    private DzService dzService;

    /**
     * 主页
     * @return
     */
    @RequestMapping("/home")
    @ResponseBody
    public JSONArray homePage(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("in 1");
        List<Dz> dzList = dzService.getDzListByPage(Constant.HOME_PAGE,Constant.HOME_PAGE_SHOW_NUM);
        JSONArray result = new JSONArray();
        for(Dz dz:dzList){
            JSONObject object = new JSONObject();
            object.put("id",dz.getdId());
            object.put("content",dz.getdContent());
            result.add(object);
        }
        return result;
    }

    @RequestMapping(value = "/{pageNum}", method = RequestMethod.GET)
    @ResponseBody
    public List<Dz> getDzListByPage(@PathVariable("pageNum") int pageNum){
        List<Dz> dzList = dzService.getDzListByPage(pageNum,Constant.HOME_PAGE_SHOW_NUM);
        return dzList;
    }
}

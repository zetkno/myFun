package com.soooofun.controller;

import com.soooofun.pojo.Dz;
import com.soooofun.service.DzService;
import com.soooofun.utils.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by mingl on 2017-10-30.
 */
@Controller
@RequestMapping("/index")
public class DzController {
    @Autowired
    private DzService dzService;

    /**
     * 主页
     * @return
     */
    @RequestMapping(value = "/home", method = RequestMethod.GET)
    @ResponseBody
    public List<Dz> home(){
        List<Dz> dzList = dzService.getDzListByPage(Constant.HOME_PAGE,Constant.HOME_PAGE_SHOW_NUM);
        return dzList;
    }

    @RequestMapping(value = "/{pageNum}", method = RequestMethod.GET)
    @ResponseBody
    public List<Dz> getDzListByPage(@PathVariable("pageNum") int pageNum){
        List<Dz> dzList = dzService.getDzListByPage(pageNum,Constant.HOME_PAGE_SHOW_NUM);
        return dzList;
    }
}

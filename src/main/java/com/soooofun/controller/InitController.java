package com.soooofun.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.soooofun.pojo.Dz;
import com.soooofun.service.DzService;
import com.soooofun.utils.Constant;
import com.soooofun.utils.ExcelToJSON;
import com.soooofun.utils.MyUUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

/**
 * Created by mingl on 2017-11-3.
 */
@Controller
public class InitController {
    @Autowired
    private DzService dzService;
    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    /**
     * 初始化dz内容
     *
     * @return
     */
    @RequestMapping("/init")
    @ResponseBody
    public JSONObject init() throws IOException, ParseException {
        long start = System.currentTimeMillis();
        JSONObject result = new JSONObject();
        JSONArray dzArray = ExcelToJSON.excelToJSON("C:\\Users\\mingl\\Desktop\\学习书籍\\dz.xlsx");
        String content = "", title = "", publisher = "", source = "", tag = "", type = "", time = "", score = "";
        for (int i = 0; i < dzArray.size(); i++) {
            JSONObject object = dzArray.getJSONObject(i);
            Dz dz = new Dz();
            dz.setdId(MyUUID.uuid("d_"));
            content = object.getString("Content");
            title = object.getString("Title");
            publisher = object.getString("Publisher");
            source = object.getString("Source");
            tag = object.getString("Tag");
            type = object.getString("Type");
            time = object.getString("Time");
            score = object.getString("Score");
            dz.setdContent(content);
            if (content.contains("<img")) {
                dz.setHasImage(1);
            }else{
                dz.setHasImage(0);
            }
            if (!Constant.BLANK_NULL.equals(title)) {
                dz.setdTitle(title);
            }
            dz.setPublisherId(publisher);
            if (!Constant.BLANK_NULL.equals(source)) {
                dz.setdSource(source);
            }
            if (!Constant.BLANK_NULL.equals(tag)) {
                dz.setdTag(tag);
            }
            if (!Constant.BLANK_NULL.equals(type)) {
                dz.setdType(type);
            }
            if (!Constant.BLANK_NULL.equals(time)) {
                dz.setPublishTime(sdf.parse(time));
            }
            if (!Constant.BLANK_NULL.equals(score)) {
                dz.setdScore(Double.valueOf(score));
            }
            dz.setdCollectionNum(0);
            dz.setdAvailable(1);
            dz.setdBrowerNum(0);
            dz.setdCommentNum(0);
            dz.setdUnniceNum(0);
            dz.setdShareNum(0);
            dz.setdSensitive(0);
            dz.setdReport(0);
            dz.setdNiceNum(0);
            dzService.addDz(dz);
        }
        long end = System.currentTimeMillis();
        System.out.println("耗时：" + (end - start));
        result.put("flag", true);
        return result;
    }
}

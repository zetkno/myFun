package com.soooofun.service;

import com.soooofun.pojo.Dz;

import java.util.List;

/**
 * Created by mingl on 2017-10-30.
 */
public interface DzService {
    //增删改查
    int deleteByPrimaryKey(String dId);

    int addDz(Dz record);

    Dz getDzById(String dId);

    int updateDz(Dz record);

    List<Dz> getDzListByPage(int start,int end);

    List<Dz> getDzListByType(String type,int start,int end);

    List<Dz> getDzListBySearch(String search,int start,int end);


}

package com.soooofun.dao;

import com.soooofun.pojo.Dz;

import java.util.List;

public interface DzMapper {
    int deleteByPrimaryKey(String dId);

    int insert(Dz record);

    int insertSelective(Dz record);

    Dz selectByPrimaryKey(String dId);

    int updateByPrimaryKeySelective(Dz record);

    int updateByPrimaryKey(Dz record);

    List<Dz> selectDzList(int start, int end);

    List<Dz> selectDzListByType(String type, int start, int end);

    List<Dz> selectDzListBySearch(String search, int start, int end);

}
package com.soooofun.service.impl;

import com.soooofun.dao.DzMapper;
import com.soooofun.pojo.Dz;
import com.soooofun.service.DzService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by mingl on 2017-10-30.
 */
@Service
public class DzServiceImpl implements DzService{
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Resource
    private DzMapper dzMapper;

    @Override
    public int deleteByPrimaryKey(String dId) {
        return dzMapper.deleteByPrimaryKey(dId);
    }

    @Override
    public int addDz(Dz record) {
        return dzMapper.insert(record);
    }

    @Override
    public Dz getDzById(String dId) {
        return dzMapper.selectByPrimaryKey(dId);
    }

    @Override
    public int updateDz(Dz record) {
        return dzMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Dz> getDzListByPage(int start, int end) {
        return dzMapper.selectDzList(start,end);
    }

    @Override
    public List<Dz> getDzListByType(String type, int start, int end) {
        return dzMapper.selectDzListByType(type,start,end);
    }

    @Override
    public List<Dz> getDzListBySearch(String search, int start, int end) {
        return dzMapper.selectDzListBySearch(search,start,end);
    }
}

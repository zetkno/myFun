package com.soooofun.pojo;

import java.util.Date;

public class Comment {
    private String cId;

    private String cContent;

    private Date cTime;

    private String cUserId;

    private String cDId;

    private Integer cFloor;

    private Integer cIsReply;

    private String cReplyUserId;

    private Integer cReplyUserFloor;

    private Integer cNiceNum;

    private Integer cSensitive;

    private Integer cAvailable;

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId == null ? null : cId.trim();
    }

    public String getcContent() {
        return cContent;
    }

    public void setcContent(String cContent) {
        this.cContent = cContent == null ? null : cContent.trim();
    }

    public Date getcTime() {
        return cTime;
    }

    public void setcTime(Date cTime) {
        this.cTime = cTime;
    }

    public String getcUserId() {
        return cUserId;
    }

    public void setcUserId(String cUserId) {
        this.cUserId = cUserId == null ? null : cUserId.trim();
    }

    public String getcDId() {
        return cDId;
    }

    public void setcDId(String cDId) {
        this.cDId = cDId == null ? null : cDId.trim();
    }

    public Integer getcFloor() {
        return cFloor;
    }

    public void setcFloor(Integer cFloor) {
        this.cFloor = cFloor;
    }

    public Integer getcIsReply() {
        return cIsReply;
    }

    public void setcIsReply(Integer cIsReply) {
        this.cIsReply = cIsReply;
    }

    public String getcReplyUserId() {
        return cReplyUserId;
    }

    public void setcReplyUserId(String cReplyUserId) {
        this.cReplyUserId = cReplyUserId == null ? null : cReplyUserId.trim();
    }

    public Integer getcReplyUserFloor() {
        return cReplyUserFloor;
    }

    public void setcReplyUserFloor(Integer cReplyUserFloor) {
        this.cReplyUserFloor = cReplyUserFloor;
    }

    public Integer getcNiceNum() {
        return cNiceNum;
    }

    public void setcNiceNum(Integer cNiceNum) {
        this.cNiceNum = cNiceNum;
    }

    public Integer getcSensitive() {
        return cSensitive;
    }

    public void setcSensitive(Integer cSensitive) {
        this.cSensitive = cSensitive;
    }

    public Integer getcAvailable() {
        return cAvailable;
    }

    public void setcAvailable(Integer cAvailable) {
        this.cAvailable = cAvailable;
    }
}
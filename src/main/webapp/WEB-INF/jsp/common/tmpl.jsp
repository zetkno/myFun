<%--
  Created by IntelliJ IDEA.
  User: liunan
  Date: 2016/7/1
  Time: 9:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script id="homeDz" type="text/x-jquery-tmpl">

{{each result}}
<!-- 笑话卡片 -->
    <div class="article block">
	    <div class="author clearfix">
		    <a href=""><img src="{{html avatar}}" alt=""></a>
			<a href=""><h2>{{html userName}}</h2></a>
			<div class="articleGender">{{html level}}</div>
		</div>
		<a href="#" class="contentHerf">
			<div class="content">
			    <span>{{html content}}</span>
				<span class="contentForAll">查看全文</span>
			</div>
		</a>
		<!-- 图片或gif -->

		<!-- <div class="stats">
		<span class="stats-vote tag-one">{{html tag}}</span>
		</div> -->

		<div class="stats-buttons bar clearfix">
			<ul class="clearfix">
				<li class="up">
				    <a href="" class="voting">
					<i>{{html tag}}</i>
					<span class="number hidden">508</span>
					</a>
				</li>
				<li class="comments">
					<a href="" class="voting">
						<i>举报</i>
					</a>
				</li>
			</ul>
		</div>
		<div class="single-share">
			<a class="share-wechat" data-type="wechat" title="分享到微信" rel="nofollow">点赞({{html niceNum}})</a>
			<a class="share-qq" data-type="qq" title="分享到QQ" rel="nofollow">反对({{html unniceNum}})</a>
			<a class="share-qzone" data-type="qzone" title="分享到QQ空间" rel="nofollow">收藏({{html collectionNum}})</a>
			<a class="share-weibo" data-type="weibo" title="分享到微博" rel="nofollow">分享</a>
		</div>
		<div class="single-clear">
		</div>
		{{each hotComments}}
            <a href="" class="indexGodCmt" target="_blank">
                <div class="cmtMain">
                    <span class="cmt-name">评论者：</span>
                    <div class="main-text">评论内容
                        <!-- <div class="likenum">
                            <img src="static/images/like@1.5.png">17
                        </div> -->
                    </div>
                </div>
            </a>
        {{/each}}
	</div>
{{/each}}

</script>



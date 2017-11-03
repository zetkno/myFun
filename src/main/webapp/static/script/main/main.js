
/**
 * Created by mingyue on 2017/11/3.
 */

$(function () {
    home();
})

function home() {
    $.ajax({
        url: CONTEXTPATH+'/home',
        type: 'POST',
        data: {},
        success: function (data) {
            console.log(data);
            //此处循环将data中的内容添加到主页中，建议将一个
            $("#homeDz").tmpl(data).appendTo('#content-left');
        },
        error: function (data) {
            layer.msg("登录超时，请检查网络连接", {icon: 5});
        }
    });
}
// 获取用户信息，把信息渲染到页面
function getUserInfo (){
    $.ajax({
        url: 'http://www.liulongbin.top:3007/my/userinfo',
        success: function(res){
            console.log(res);
            var name = res.data.nickname || res.data.username;
            $('.username').html('&nbsp;&nbsp;' + name);
            if(res.data.user_pic){
                $('.layui-nav-img').attr('scr',res.data.user_pic).show();
                $('.text-avatar').hide();
            }else{
                var firstWord = name.substr(0,1).toUpperCase();
                $('.text-avatar').text(firstWord).css('display','inline-block');
                $('.layui-nav-img').hide();
            }
        },
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
getUserInfo();
// 完成退出功能
$('#logout').click(function(){
    layer.confirm('确认退出吗',function(index){
        layer.close();
        localStorage.removeItem('token');
        location.href = '/login.html';
    })
})
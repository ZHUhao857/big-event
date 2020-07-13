// 获取用户信息，把信息渲染到页面
function getUserInfo (){
    $.ajax({
        url: '/my/userinfo',
        success: function(res){
            if(res.status ===0){
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
            }
            // else if (res.status == 1 && res.message === '身份认证失败！'){
            //     localStorage.removeItem('token');
            //     location.href = '/login.html';
            // }
        },
        // complete: function(xhr){
        //     if (xhr.responseJSON.status == 1 && xhr.responseJSON.message === '身份认证失败！'){
        //         localStorage.removeItem('token');
        //         location.href = '/login.html';
        //     }
        // },
        // headers: {
        //     Authorization: localStorage.getItem('token')
        // }
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
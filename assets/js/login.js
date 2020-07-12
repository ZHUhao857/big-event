// 切换登录和注册的盒子
$('#goto-login').click(function(){
    $('#login').show().next().hide();
});
$('#goto-register').click(function(){
    $('#login').hide().next().show();
});
// 完成注册功能
$('#register form').on('submit',function(e){
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: 'http://www.liulongbin.top:3007/api/reguser',
        data: data,
        success: function(res){
            layer.msg(res.message);
            if(res.status === 0){
                $('#login').show().next().hide();
            }
        }
    })
})
// 表单验证功能
    // 密码长度6~12位，两次密码必须一致
    // 使用layui的form之前必须先引入模块
var form = layui.form;
form.verify({
    // length: [/^\S{6,12}$/,'请输入6~12位的数字或字母']
    len: function(val){
        if(!/^\S{6,12}$/.test(val)){
            return '密码必须6到12位，且不能出现空格'
        }
    },
    same: function(val){
        var pwd = $('input[name=password]').val();
        if(pwd !== val){
            return '两次密码不一致'
        }
    }
})
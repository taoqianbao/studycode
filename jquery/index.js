;(function() {
    var config = [{
        url: '/get/article/login',
        responseText: {
            status: 200,
            user: []
        },
        response: function(rq) {
            console.log("rq.data:" + rq);
            this.responseText.user.push({
                mock_name: "joe",
                mock_pwd: "111"
            });

        }
    }];
    for (var i = 0; i < config.length; i++) {
        $.mockjax(config[i]);
    }

    var lg_name = $("#username").val();
    var lg_pwd = $("#pwd").val();


    $(document).ajaxStart(function() {
        alert("发起请求....");
    });
    $(document).ajaxStop(function() {
        alert("请求完成....");
    });
    $("#submit_login").click(function() {
        $.ajax({
            type: "post",
            url: '/get/article/login',
            async: true,
            success: function(result) {
                var getUser = JSON.stringify(result.user, ["mock_name"]);
                var Obj_User = JSON.parse(getUser);
                $.each(Obj_User, function(i, item) {
                    console.log(item.mock_name);
                });
                console.log("result:==" + Obj_User);
                /*if(){

                }*/
            },
            error: function(xhr) {
                console.log(xhr);
                alert("sorry！ miss some error！");
            }
        });
    });
})()

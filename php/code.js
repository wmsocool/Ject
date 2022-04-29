$(function () {
    var param = {}
    param.str = '你知道吗'
    $.ajax({
        type: 'POST',
        url: 'add.php',
        data: param,
        cache: false,
        async: true,
        success: function (data) {
            if (data) {
                console.log(data)
                param.tid = data.data
                $.ajax({
                    type: 'GET',
                    url: 'get.php',
                    data: param,
                    cache: false,
                    async: true,
                    success: function (data) {
                        if (data) {
                            console.log(data)
                        } else {
                        }
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            } else {
            }
        },
        error: function (data) {
            console.log(data)
        }
    })
})

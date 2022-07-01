

function getData(pageName) { //裡面放page name，在body可以onload某頁面，在讓各物件onclick分別切不同page
    //XML為原生物件，專門和伺服器連線
    var req = new XMLHttpRequest();
    req.open("get", "https://ntudent.github.io/ntudent_gongbi/index.html");
    req.onload = function() { //load事件，偵測連線的狀態結束
        //連線完成
        var content = document.getElementById("news");
        content.innerHTML = this.responseText;
    };
    req.send(); //送出連線
};

$(() => {
    
    $('#aaa').on('click', () => {
        obj = document.querySelector('object')
        obj.style.display = 'none'
        //$('#obj1').hide()
    })

    //按下列表後，關其他正在show的object，開目標object
    $('#countdown').on('click', () => {
        obj = document.querySelector('object[style="display: block;"]')
        obj.style.display = 'none'
        $('#obj_countdown').css('display', 'block')
        //$('#countdown').css('color', 'blue')
    })
    $('#all').on('click', () => {
        obj = document.querySelector('object[style="display: block;"]')
        obj.style.display = 'none'
        $('#obj_all').css('display', 'block')
        //$('#all').css('color', 'blue')
    })
    
})

function test() {
    $.ajax({URL:"../password.php", success:function(result){ //call url中的funcion
        $("div").text(result);
        $("#submit").remove();
        }
    })
}


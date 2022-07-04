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
function objShow(id) { //並顯示新的obj
    var obj = document.querySelector('object[style="display: block;"]');
    obj.style.display = 'none'; //隱藏原object
    if (document.getElementsByClassName('button_clicked').length !== 0){
        document.getElementsByClassName('button_clicked')[0].classList.remove('button_clicked');
    }
    document.getElementById('#countdown')
    var objName = "obj_" + id;
    document.getElementById(objName).style.display = 'block';
    document.getElementById(id).classList.add('button_clicked')
    //document.querySelector(objName).style.font-size = '19';設字體 注意.css只能用在jQuery
}
function overMouse(id) {
    document.getElementById(id).classList.add('button_clicked')
    document.getElementById(id).onmouseleave = function () {
        document.getElementById(id).classList.remove('button_clicked')
    }
}
$(() => {
    $('#obj_countdown').attr("height", "2000")
    
    
})

function test() {
    $.ajax({URL:"../password.php", success:function(result){ //call url中的funcion
        $("div").text(result);
        $("#submit").remove();
        }
    })
}


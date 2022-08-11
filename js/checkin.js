function getData() { //裡面放page name，在body可以onload某頁面，在讓各物件onclick分別切不同page
    //XML為原生物件，專門和伺服器連線
    var req = new XMLHttpRequest();
    req.open("get", "https://www.bullshitgenerator.com/");
    req.onload = function() { //load事件，偵測連線的狀態結束
        //連線完成
        var content = document.getElementsByClassName("brz-cp-color8");
        content.innerHTML = this.responseText;
        document.getElementById("body_checkin").text(content);
    };
    req.send(); //送出連線
}; 
$(() => {
    
})
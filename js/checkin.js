function thisrefresh() {
    window.location.reload();
}
setTimeout('thisrefresh()', 100000); //自動刷新頁面
function getmonth() { //取得月份
    var month = (new Date()).getMonth() + 1;
    var i = 1;
    while (i<=month) {
        setTimeout(() => {
            var docu = document.getElementById("month_num");
            $(docu).text(i); //月份往上跳
        }, 1000)
        i += 1;
    }   
    month_en(i-1);
}
function month_en(i) {
    switch (i) {
        case 0 : 
            var text = "January";
            break;
        case 1 :
            var text = "Febuary";
            break;
        case 2 :
            var text = "March";
            break;
        case 3 :
            var text = "April";
            break;
        case 4 :
            var text = "May";
            break;
        case 5 :
            var text = "June";
            break;
        case 6 :
            var text = "July";
            break;
        case 7 :
            var text = "August";
            break;
        case 8 :
            var text = "September";
            break;
        case 9 :
            var text = "October";
            break;
        case 10 :
            var text = "November";
            break;
        case 11 :
            var text = "December";
            break;
    }
    var docu = document.getElementById("month_en");
    $(docu).text(text);
    docu.classList.add("fadeIn"); //浮現動畫
}
function getdate() { //取得日期
    var date = (new Date()).getDate();
    while (i <= date) {
        setTimeout(() => {
            var docu = document.getElementById("date");
            $(docu).text(i+1); //日期往上跳
        }, 1000)
        i += 1;
    }
    week();
}
function week() { //星期幾
    var week = (new Date()).getDay();
    switch (week) {
        case 0 :
            var text = "Sunday";
            break;
        case 1 :
            var text = "Monday";
            break;
        case 2 :
            var text = "Tuesday";
            break;
        case 3 :
            var text = "Wednesday";
            break;
        case 4 :
            var text = "Thursday";
            break;
        case 5 :
            var text = "Friday";
            break;
        case 6 :
            var text = "Saturday";
            break;
    }
    var docu = document.getElementById("week");
    $(docu).text(text);
    docu.classList.add("fadeIn"); //浮現動畫
}
$(() => {
    d = new Date()

})

function thisrefresh() {
    window.location.reload();
}
setTimeout('thisrefresh()', 100000); //每100秒自動刷新頁面
function getmonth() { //取得月份
    var month = (new Date()).getMonth() + 1;
    for (let i = 1; i<=month; i++) {
        setTimeout(() => {
            var docu = document.getElementById("month_num");
            $(docu).text(i++); //月份往上跳
        }, 100 * i)
    } 
}
function month_en() {
    var i = (new Date()).getMonth()
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
    for (let i = 1; i <= date; i++) { //用let避免用var
        setTimeout(() => {
            var docu = document.getElementById("date");
            $(docu).text(i++); //日期往上跳
        }, 50 * i)
    }
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
function addLoadEvent(func) { 
    var oldonload = window.onload; 
    if (typeof window.onload != 'function') { 
      window.onload = func; 
    } else { 
      window.onload = function() { 
        if (oldonload) { 
          oldonload(); 
        } 
        func(); 
      } 
    } 
}
addLoadEvent(getmonth);
addLoadEvent(month_en);
addLoadEvent(getdate);
addLoadEvent(week);
function week_lower () {
    var d = (new Date()).getDay();
    return d;
}
function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
function getDiv(id, parentId) {
    const div = document.createElement('div'); //創建新的層的DOM節點
    div.setAttribute('id', id); //賦予層元素id
    const past = document.getElementById(parentId);
    past.appendChild(div); //append節點到parentId元素上
}
$(() => {
    today = formatDate()
    //若today有特殊課表如胚胎，先填上去然後給個id，如果普通課遇到id就break
    //胚胎上課表
    pt_class = new Array("2022-08-12", "2022-10-24")
    if (jQuery.inArray(today, pt_class) !== -1) {
        for (i=6; i<=7; i++) {
            getDiv("ptClass", i)
            $ptClass = $('#plClass')
            $($ptClass).text("胚胎")
        }
    }
    //星期一 組織:若碰上第i節有掛id::ptClass的就不要getDiv
    if (week_lower() == 1) {

    }
})

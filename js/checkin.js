function thisrefresh() {
    window.location.reload();
}
setTimeout('thisrefresh()', 100000); //每100秒自動刷新頁面
function getmonth() { //取得月份
    var month = (new Date()).getMonth() + 1;
    for (let i = 1; i<=month; i++) {
        setTimeout(() => {
            var docu = document.getElementById("month_num");
            docu.style.fontSize = '48px';
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
    docu.style.fontSize = '24px';
    docu.classList.add("fadeIn"); //浮現動畫
}
function getdate() { //取得日期
    var date = (new Date()).getDate();
    for (let i = 1; i <= date; i++) { //用let避免用var
        setTimeout(() => {
            var docu = document.getElementById("date");
            docu.style.fontSize = '60px';
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
    docu.style.fontSize = '24px';
    docu.classList.add("fadeIn"); //浮現動畫
}
function addLoadEvent(func) {  //load進頁面時自動load下面func
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

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('-');
}
function getHours() {
    var d = new Date();
    d = d.getHours();
    return d;
}
function getLi(id, parentId) {
    const li = document.createElement('li'); //創建新的層的DOM節點
    li.setAttribute('id', id); //賦予層元素id
    const past = document.getElementById(parentId);
    past.appendChild(li); //append節點到parentId元素上
}
$(() => {
    today = formatDate()
    special = new Array()
    //若today有特殊課表如胚胎，先填上去然後給個id，如果普通課遇到id就break
    //胚胎上課表
    pt_class = new Array("2022-08-14", "2022-10-24")
    if (jQuery.inArray(today, pt_class) !== -1) {
        for (i=6; i<=7; i++) {
            getLi("ptClass", i)
            $ptClass = document.querySelectorAll("[id='ptClass']")
            $($ptClass).text("胚胎")
            special.push(i) //特別課程的節次
        }
    }
    pt_class2 = new Array("2022-08-13", "2022-9-24")
    if (jQuery.inArray(today, pt_class2) !== -1) {
        for (i=1; i<=2; i++) {
            getLi("ptClass", i)
            $ptClass = document.querySelectorAll("[id='ptClass']")
            $($ptClass).text("胚胎")
            special.push(i) //特別課程的節次
        }
    }
    //星期一 組織:若碰上第i節有掛id::ptClass的就不要getLi
    if (week_lower() == 1) {
        for (i=1; i<=9; i++) {
            if (jQuery.inArray(i, special) !== -1) { //有特別課程則按照該課表
                continue;
            } else {
                if (i<=4) {
                    getLi("zzClass", i)
                    $zzClass = document.querySelectorAll("[id='zzClass']")
                    $($zzClass).text("組織")
                }
                if (i>=6) {
                    getLi("slClass", i)
                    $slClass = document.querySelectorAll("[id='slClass']")
                    $($slClass).text("生理")
                }
            } 
        }
    }
    //星期二 下午若無胚胎則組織
    if (week_lower() == 2) {
        for (i=1; i<=9; i++) {
            docu = document.querySelectorAll("[id='ptClass']")
            if (i == $(docu).closest('ul').attr('id') || i == $(docu[1]).closest('ul').attr('id')) {
                continue;
            } else {
                if (i<=4) {
                    getLi("dtClass", i)
                    $dtClass = document.querySelectorAll("[id='dtClass']")
                    $($dtClass).text("大體")
                }
                if (i == 6 || i == 7) {
                    getLi("zzClass", i)
                    $zzClass = document.querySelectorAll("[id='zzClass']")
                    $($zzClass).text("組織")
                }
                if (i == 8 || i == 9) {
                    getLi("dtClass", i)
                    $dtClass = document.querySelectorAll("[id='dtClass']")
                    $($dtClass).text("大體")
                }
            }
        }
    }
    //星期三
    if (week_lower() == 3) {
        for (i=1; i<=9; i++) {
            if (jQuery.inArray(i, special) !== -1) { //有特別課程則按照該課表
                continue;
            } else {
                if (i>=2 && i<=4) {
                    getLi("odClass", i)
                    $odClass = document.querySelectorAll("[id='odClass']")
                    $($odClass).text("OD")
                }
                if (i==6 || i==7) {
                    getLi("dtClass", i)
                    $dtClass = document.querySelectorAll("[id='dtClass']")
                    $($dtClass).text("大體")
                }
                if (i==8 || i==9) {
                    getLi("zzClass", i)
                    $zzClass = document.querySelectorAll("[id='zzClass']")
                    $($zzClass).text("組織")
                }
            } 
        }
    }
    //星期五
    if (week_lower() == 5) {
        for (i=1; i<=9; i++) {
            if (jQuery.inArray(i, special) !== -1) { //有特別課程則按照該課表
                continue;
            } else {
                if (i==1) {
                    getLi("kjClass", i)
                    $kjClass = document.querySelectorAll("[id='kjClass']")
                    $($kjClass).text("口解")
                }
                if (i==3 || i==4) {
                    getLi("irClass", i)
                    $irClass = document.querySelectorAll("[id='irClass']")
                    $($irClass).text("醫人")
                }
                if (i>=6) {
                    getLi("kpClass", i)
                    $kpClass = document.querySelectorAll("[id='kpClass']")
                    $($kpClass).text("口胚")
                }
            } 
        }
    }
    //時間已過的要劃掉
    del = getHours() - 8 //第2節getHours() = 9，要劃掉第1節課
    if (getHours() == 16) {del = 7}
    if (getHours() == 17) {del = 8}
    if (del > 0 && del < 9) { //上課時間，依照節次加入劃掉的css
        for(i=1; i<=del; i++) {
            $('#' + i).classList.add("delLine");
        }
        //箭頭掉下來
        //document.getElementsByClassName("drop").style.setProperty('--top', `${del * 10}px`)
    }
    if (del >= 9){ //放學後，全部課程劃掉
        for(i=1; i<=9; i++) {
            $('#' + i).classList.add("delLine");
        }
    }
    //顯示明天課表
})

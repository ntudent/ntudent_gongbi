function thisrefresh() {
    window.location.reload();
}
setTimeout('thisrefresh()', 100000); //每100秒自動刷新頁面
function getmonth() { //取得月份
    var month = (new Date()).getMonth() + 1;
    for (let i = 1; i<=month; i++) {
        setTimeout(() => {
            var docu = document.getElementById("month_num");
            docu.style.fontSize = '40px';
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
    docu.style.fontSize = '15px';
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
function week_lower (i) {
    var d = (new Date()).getDay();
    if (d+i > 6) {
        return d + i - 7;
    } else {
        return d + i;
    }
    
}
function formatDate(i) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    var month = '' + (d.getMonth() + 1),
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
function addDel(del){ //刪除線
    for(let i=1; i<=del; i++) {
        setTimeout(() => {
            $('#' + i).addClass("delLine");
        }, 200)
    }
}
//function arrow(del) {
    //for(let i=1; i<=del; i++) {
        //setTimeout(() => {
            //var docu = document.getElementsByClassName("drop");
           // docu[0].style.marginTop = (i * 25.5) + 'px';
        //}, 200);
    //}
//}
$(() => {
    today = formatDate(0)
    special = new Array()
    //若today有特殊課表如胚胎，先填上去然後給個id，如果普通課遇到id就break
    //胚胎上課表
    pt_class1 = new Array("2023-02-20", "2023-03-13", "2023-04-17")
    if (jQuery.inArray(today, pt_class1) !== -1) {
        for (i=3; i<=4; i++) {
            getLi("ptClass", i)
            $ptClass = document.querySelectorAll("[id='ptClass']")
            $($ptClass).text("胚胎")
            special.push(i) //特別課程的節次
        }
    }
    pt_class2 = new Array("2023-04-25")
    if (jQuery.inArray(today, pt_class2) !== -1) {
        for (i=7; i<=8; i++) {
            getLi("ptClass", i)
            $ptClass = document.querySelectorAll("[id='ptClass']")
            $($ptClass).text("胚胎")
            special.push(i) //特別課程的節次
        }
    }
    pt_class3 = new Array("2023-05-02")
    if (jQuery.inArray(today, pt_class3) !== -1) {
        for (i=1; i<=4; i++) {
            getLi("ptClass", i)
            $ptClass = document.querySelectorAll("[id='ptClass']")
            $($ptClass).text("胚胎")
            special.push(i) //特別課程的節次
        }
    }
    pt_class4 = new Array("2023-05-16")
    if (jQuery.inArray(today, pt_class4) !== -1) {
        for (i=6; i<=6; i++) {
            getLi("ptClass", i)
            $ptClass = document.querySelectorAll("[id='ptClass']")
            $($ptClass).text("胚胎")
            special.push(i) //特別課程的節次
        }
    }
    kp_class = new Array("2022-11-25")
    if (jQuery.inArray(today, kp_class) !== -1) {
        for (i=3; i<=4; i++) {
            getLi("kpClass", i)
            $kpClass = document.querySelectorAll("[id='kpClass']")
            $($kpClass).text("口胚")
            special.push(i) //特別課程的節次
        }
        for (i=6; i<=10; i++) {
            special.push(i) //調課時間，下午為空堂，所以不顯示
        }
    }
    //星期一 
    if (week_lower(0) == 1) {
        for (i=1; i<=10; i++) {
            if (jQuery.inArray(i, special) !== -1) { //有特別課程則按照該課表
                continue;
            } else {
                if (i<=4) {
                    getLi("sjClass", i)
                    $sjClass = document.querySelectorAll("[id='sjClass']")
                    $($sjClass).text("神解")
                }
                if (i==9) {
                    getLi("osClass", i)
                    $osClass = document.querySelectorAll("[id='osClass']")
                    $($osClass).text("口解")
                }
                if (i>=10) {
                    getLi("stClass", i)
                    $stClass = document.querySelectorAll("[id='stClass']")
                    $($stClass).text("小討")
                }
            } 
        }
    }
    //星期二 胚胎組織大體:若碰上第i節有掛id::ptClass的就不要getLi
    if (week_lower(0) == 2) {
        for (i=1; i<=10; i++) {
            docu = document.querySelectorAll("[id='ptClass']")
            if (i == $(docu).closest('ul').attr('id') || i == $(docu[1]).closest('ul').attr('id')) {
                continue;
            } else {
                if (i<=2) {
                    getLi("ptClass", i)
                    $ptClass = document.querySelectorAll("[id='ptClass']")
                    $($ptClass).text("大體")
                }
                if (i == 3 || i == 4) {
                    getLi("zzClass", i)
                    $zzClass = document.querySelectorAll("[id='zzClass']")
                    $($zzClass).text("組織")
                }
                if (i>=6) {
                    getLi("dtClass", i)
                    $dtClass = document.querySelectorAll("[id='dtClass']")
                    $($dtClass).text("大體")
                }
            }
        }
    }
    //星期三
    if (week_lower(0) == 3) {
        for (i=1; i<=10; i++) {
            if (jQuery.inArray(i, special) !== -1) { //有特別課程則按照該課表
                continue;
            } else {
                if (i<=4) {
                    getLi("fixClass", i)
                    $fixClass = document.querySelectorAll("[id='fixClass']")
                    $($fixClass).text("FIX")
                }
            } 
        }
    }
    //星期四
    if (week_lower(0) == 4) {
        for (i=1; i<=10; i++) {
            if (jQuery.inArray(i, special) !== -1) { //有特別課程則按照該課表
                continue;
            } else {
                if (i==3 || i==4) {
                    getLi("periClass", i)
                    $periClass = document.querySelectorAll("[id='periClass']")
                    $($periClass).text("牙周")
                }
                if (i==6 || i==7) {
                    getLi("ocClass", i)
                    $ocClass = document.querySelectorAll("[id='ocClass']")
                    $($ocClass).text("咬合")
                }
                if (i==8 || i==9) {
                    getLi("radClass", i)
                    $radClass = document.querySelectorAll("[id='radClass']")
                    $($radClass).text("牙放")
                }
            } 
        }
    }

    //時間已過的要劃掉
    del = getHours() - 8 //第2節getHours() = 9，要劃掉第1節課
    if (getHours() == 16) {del = 7}
    if (getHours() == 17) {del = 8}
    if (getHours() == 18) {del = 9}
    if (del < 0) {
        docu = document.getElementsByClassName("drop")
        docu[0].style.setProperty('display', 'none') //setProperty要加[0]
    }
    if (del > 0 && del < 10) { //上課時間，依照節次加入劃掉的css
        addDel(del)
        //箭頭掉下來
        docu = document.getElementsByClassName("drop")
        //docu[0].style.setProperty('--margin-top', `${del * 25.5}px`) //setProperty要加[0]
        docu[0].style.marginTop = (del * 25.5) + "px"
    }
    if (del >= 10){ //放學後，全部課程劃掉
        addDel(10)
        docu = document.getElementsByClassName("drop")
        //docu[0].style.setProperty('--margin-top', `${del * 25.5}px`)
        //arrow(del)
        //docu[0].style.marginTop = (del * 25.5) + "px"
        docu[0].style.setProperty('display', 'none') //setProperty要加[0]
    }
    //顯示明天課表
    if (week_lower(1) == 6 || week_lower(1) == 0) { //禮拜六日無課
        document.getElementById("noClass").style.setProperty('display', 'block')
    } else {
        document.getElementById("yesClass").style.setProperty('display', 'block')
        if (week_lower(1) == 4) {
            docu = document.getElementById("classFrom")
            $(docu).text("三") //禮拜四是從第三節開始上課
        } else {
            docu = document.getElementById("classFrom")
            $(docu).text("一")
        }
        tomorrowClass = new Array()
        if (jQuery.inArray(formatDate(1), pt_class1) !== -1) {
            for (i=3; i<=4; i++) {
                tomorrowClass[i] = "胚胎" //把特殊課程加到明天課程的array中
            }
        }
        if (jQuery.inArray(formatDate(1), pt_class2) !== -1) {
            for (i=7; i<=8; i++) {
                tomorrowClass[i] = "胚胎"
            }
        }
        if (jQuery.inArray(formatDate(1), pt_class3) !== -1) {
            for (i=1; i<=4; i++) {
                tomorrowClass[i] = "胚胎"
            }
        }
        if (jQuery.inArray(formatDate(1), pt_class4) !== -1) {
            for (i=6; i<=6; i++) {
                tomorrowClass[i] = "胚胎"
            }
        }
        if (jQuery.inArray(formatDate(1), kp_class) !== -1) {
            for (i=3; i<=4; i++) {
                tomorrowClass[i] = "口胚"
            }
            for (i=6; i<=9; i++) {
                tomorrowClass[i] = ""
            }
        }
        if (week_lower(1) == 1) { //星期一普通課程
            for (i=1; i<=10; i++) {
                if (tomorrowClass[i] == undefined) { //若該節沒有特殊課程
                    if(i<=4) {
                        tomorrowClass[i] = "神解"
                    }
                    if(i==9) {
                        tomorrowClass[i] = "口解"
                    }
                    if(i>=10) {
                        tomorrowClass[i] = "小討"
                    }
                }
            }
        }
        if (week_lower(1) == 2) { //星期二普通課程
            for (i=1; i<=10; i++) {
                if (tomorrowClass[i] == undefined) { //若該節沒有特殊課程
                    if(i<=2) {
                        tomorrowClass[i] = "大體"
                    }
                    if(i==3||i==4){
                        tomorrowClass[i] = "組織"
                    }
                    if(i>=6){
                        tomorrowClass[i] = "大體"
                    }
                }
            }
        }
        if (week_lower(1) == 3) { //星期三普通課程
            for (i=1; i<=10; i++) {
                if (tomorrowClass[i] == undefined) { //若該節沒有特殊課程
                    if(i<=4) {
                        tomorrowClass[i] = "FIX"
                    }
                }
            }
        }
        if (week_lower(1) == 4) { //星期四普通課程
            for (i=1; i<=10; i++) {
                if (tomorrowClass[i] == undefined) { //若該節沒有特殊課程
                    if(i==3||i==4){
                        tomorrowClass[i] = "牙周"
                    }
                    if(i==6||i==7){
                        tomorrowClass[i] = "咬合"
                    }
                    if(i==8||i==9){
                        tomorrowClass[i] = "牙放"
                    }
                }
            }
        }
        

        tomorrowClassOut = new Array()
        for (i=1; i<=10; i++) {
            if(jQuery.inArray(tomorrowClass[i], tomorrowClassOut) == -1 && tomorrowClass[i] !== undefined){
                tomorrowClassOut.push(tomorrowClass[i]) //依節次輸出，每課程名只會用到一次
            }
        }
        $($('#tomorrowClass')).text(tomorrowClassOut.join("\r\n"))
        //docu = document.getElementById("tomorrow")
        //docu.style.setProperty('--height', `${tomorrowClassOut.length * 20 + 40}px`)
    }
})

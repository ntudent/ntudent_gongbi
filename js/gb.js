function getday2(k) {
    var someDate = new Date(k);
    var numberOfDaysToAdd = 2;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var g = new Date(result);
    return ("\""+g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate()+"\"" );
}
function getday3(k) {
    var someDate = new Date(k);
    var numberOfDaysToAdd = 3;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var g = new Date(result);
    return ("\""+g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate()+"\"" );
}
var n_item = 0; //item[][0]的個數
function count_item() {
    return n_item++;
}
function thisgb(gb_name, week) {
    count_item();
    if ($.isNumeric(week)) {
        return (gb_name + " Week" + week);
    }
    else {
        return (gb_name + " " + week);
    }
}
function getTr(id, parentId) {
    const tr = document.createElement('tr') //創建新的層的DOM節點
    tr.setAttribute('id', id) //賦予層元素id
    const past = document.getElementById(parentId) 
    past.appendChild(tr) //從table的t_body下append節點到parentTd元素上
}

function alert_name_f (alert_name, type) {
    if (alert_name.length == 0) {
        return ("今天無要" + type + "的人類");
    }
    var a = "";
    for (i=0; i<alert_name.length-1; i++) {
        a += alert_name[i];
        a += "、";
    }
    a += alert_name[alert_name.length-1]
    return ("今天要" + type + "的人類: " + a);
}
document.getElementById("loadAll").addEventListener('click', () => {
    var $week = document.getElementById("week");
    $($week).text("所有"); //當按下"未來所有"時改字
    document.getElementById("loadWeek").style.display = "block";
    document.getElementById("loadAll").style.display = "none";
})
document.getElementById("loadWeek").addEventListener('click', () => {
    var $week = document.getElementById("week");
    $($week).text("一周"); //當按下"未來所有"時改字
    document.getElementById("loadAll").style.display = "block";
    document.getElementById("loadWeek").style.display = "none";
})
$(() => {
    
    item = document.createElement('item') //開一個DOM節點
    gb = document.createElement('gb') //開一個DOM節點
    
    n = new Array(" ", "顏圓圓", "陳映璇", "呂欣蓉", "朱凱新", "何奕佑", "李崇愷", "王冠中", "馮文風", "曾子洋", "洪子淵", "陳庭禾", "洪秀峰", "夏家亨", "謝沛辰", "林裕凱", "", "謝沛葶", "凌卓軒", "蔡侁甫", "", "吳肇家", "李兆哲", "林育澤", "林琨祐", "", "黃昱賓", "黃淳暉", "黃聆歆", "葉亭妤", "蔡鈺程", "鄭丞佑", "戴均祐", "謝岳辰", "涂峻銓")

    gb = new Array()
    item = new Array()
    //改共筆改以下這段
    //item[ ] = new Array(thisgb(" ", " "), n[ ], n[ ], "2022- - ", "", n[ ], "") (共筆, 寫手1, 寫手2, 寫手日, 交稿日, 審稿, 審稿日)
    item[0] = new Array(thisgb("口解", "1-1"), n[21], n[24], "2023-02-20", "", n[5], "")
    item[1] = new Array(thisgb("口解", "1-2"), n[11], n[21], "2023-03-06", "", n[24], "")
    item[2] = new Array(thisgb("口解", "1-3"), n[5], n[11], "2023-03-13", "", n[21], "")
    item[3] = new Array(thisgb("口解", "線上I"), n[24], n[5], "2023-03-13", "", n[11], "")
    item[4] = new Array(thisgb("口解", "2-1"), n[21], n[24], "2023-03-20", "", n[5], "")
    item[5] = new Array(thisgb("口解", "2-2"), n[11], n[21], "2023-03-27", "", n[24], "")
    item[6] = new Array(thisgb("口解", "2-3"), n[5], n[11], "2023-04-10", "", n[21], "")
    item[7] = new Array(thisgb("口解", "2-4"), n[24], n[5], "2023-04-17", "", n[11], "")
    item[8] = new Array(thisgb("口解", "3-1"), n[21], n[24], "2023-04-24", "", n[5], "")
    item[9] = new Array(thisgb("口解", "3-2"), n[11], n[21], "2023-05-01", "", n[24], "")
    item[10] = new Array(thisgb("口解", "4-1"), n[5], n[11], "2023-05-08", "", n[21], "")
    item[11] = new Array(thisgb("口解", "4-2"), n[24], n[5], "2023-05-15", "", n[11], "")
    item[12] = new Array(thisgb("口解", "5-1"), n[21], n[24], "2023-05-22", "", n[5], "")
    item[13] = new Array(thisgb("口解", "5-2"), n[11], n[21], "2023-05-29", "", n[24], "")
    item[14] = new Array(thisgb("口解", "線上II"), n[5], n[11], "2023-05-29", "", n[21], "")    
    item[15] = new Array(thisgb("口解", "期末"), n[1], n[0], "x", "2023-05-22", n[0], "x")
    item[16] = new Array(thisgb("胚胎", "1"), n[10], n[15], "2023-02-20", "", n[17], "")
    item[17] = new Array(thisgb("胚胎", "2"), n[17], n[15], "2023-03-13", "", n[28], "")
    item[18] = new Array(thisgb("胚胎", "3"), n[17], n[15], "2023-04-17", "", n[28], "")
    item[19] = new Array(thisgb("胚胎", "4"), n[17], n[10], "2023-04-25", "", n[28], "")
    item[20] = new Array(thisgb("胚胎", "5"), n[10], n[28], "2023-05-02", "", n[15], "")
    item[21] = new Array(thisgb("胚胎", "6"), n[10], n[28], "2023-05-16", "", n[17], "")    
    item[22] = new Array(thisgb("胚胎", "期末"), n[9], n[0], "x", "2023-05-23", n[0], "x")
    item[23] = new Array(thisgb("牙周", "1"), n[8], n[7], "2023-02-23", "", n[6], "")
    item[24] = new Array(thisgb("牙周", "2"), n[13], n[8], "2023-03-02", "", n[7], "")
    item[25] = new Array(thisgb("牙周", "3"), n[6], n[13], "2023-03-09", "", n[8], "")
    item[26] = new Array(thisgb("牙周", "4"), n[7], n[6], "2023-03-16", "", n[13], "")
    item[27] = new Array(thisgb("牙周", "5"), n[8], n[7], "2023-03-23", "", n[6], "")
    item[28] = new Array(thisgb("牙周", "6"), n[13], n[8], "2023-03-30", "", n[7], "")
    item[29] = new Array(thisgb("牙周", "7"), n[6], n[13], "2023-04-06", "", n[8], "")
    item[30] = new Array(thisgb("牙周", "8"), n[7], n[6], "2023-04-20", "", n[13], "")
    item[31] = new Array(thisgb("牙周", "9"), n[8], n[7], "2023-04-27", "", n[6], "")
    item[32] = new Array(thisgb("牙周", "10"), n[13], n[8], "2023-05-04", "", n[7], "")
    item[33] = new Array(thisgb("牙周", "11"), n[6], n[13], "2023-05-11", "", n[8], "")
    item[34] = new Array(thisgb("牙周", "12"), n[7], n[6], "2023-05-18", "", n[13], "")
    item[35] = new Array(thisgb("牙周", "13"), n[8], n[7], "2023-05-25", "", n[6], "")
    item[36] = new Array(thisgb("牙周", "期中"), n[3], n[0], "x", "2023-03-30", n[0], "x")
    item[37] = new Array(thisgb("牙周", "期末"), n[3], n[0], "x", "2023-05-18", n[0], "x")
    item[38] = new Array(thisgb("咬合", "1"), n[31], n[32], "2023-02-23", "", n[30], "")
    item[39] = new Array(thisgb("咬合", "2"), n[12], n[30], "2023-03-02", "", n[31], "")
    item[40] = new Array(thisgb("咬合", "3"), n[12], n[30], "2023-03-09", "", n[32], "")
    item[41] = new Array(thisgb("咬合", "4"), n[31], n[32], "2023-03-16", "", n[12], "")
    item[42] = new Array(thisgb("咬合", "5"), n[12], n[30], "2023-03-23", "", n[31], "")
    item[43] = new Array(thisgb("咬合", "6"), n[31], n[32], "2023-03-30", "", n[30], "")
    item[44] = new Array(thisgb("咬合", "7"), n[12], n[30], "2023-04-27", "", n[32], "")
    item[45] = new Array(thisgb("咬合", "8"), n[31], n[32], "2023-06-01", "", n[12], "")
    item[46] = new Array(thisgb("牙放", "1"), n[22], n[34], "2023-02-23", "", n[33], "")
    item[47] = new Array(thisgb("牙放", "2"), n[33], n[14], "2023-03-02", "", n[34], "")
    item[48] = new Array(thisgb("牙放", "3"), n[22], n[34], "2023-03-09", "", n[14], "")
    item[49] = new Array(thisgb("牙放", "4"), n[34], n[14], "2023-03-16", "", n[22], "")
    item[50] = new Array(thisgb("牙放", "5"), n[22], n[34], "2023-03-23", "", n[33], "")
    item[51] = new Array(thisgb("牙放", "6"), n[33], n[14], "2023-03-30", "", n[34], "")
    item[52] = new Array(thisgb("牙放", "7"), n[22], n[34], "2023-04-06", "", n[14], "")
    item[53] = new Array(thisgb("牙放", "8"), n[33], n[14], "2023-04-13", "", n[22], "")
    item[54] = new Array(thisgb("牙放", "9"), n[22], n[34], "2023-04-20", "", n[33], "")
    item[55] = new Array(thisgb("牙放", "10"), n[34], n[14], "2023-04-27", "", n[34], "")
    item[56] = new Array(thisgb("牙放", "11"), n[22], n[34], "2023-05-04", "", n[14], "")
    item[57] = new Array(thisgb("牙放", "12"), n[33], n[14], "2023-05-11", "", n[22], "")
    item[58] = new Array(thisgb("牙放", "13"), n[22], n[34], "2023-05-18", "", n[33], "")
    item[59] = new Array(thisgb("牙放", "14"), n[34], n[14], "2023-05-25", "", n[34], "")
    item[60] = new Array(thisgb("牙放", "15"), n[22], n[34], "2023-06-01", "", n[14], "")
    item[61] = new Array(thisgb("牙放", "期末"), n[27], n[0], "x", "2023-05-25", n[0], "x")
    item[62] = new Array(thisgb("FIX", "1"), n[2], n[26], "2023-02-22", "", n[4], "")
    item[63] = new Array(thisgb("FIX", "2"), n[2], n[29], "2023-03-01", "", n[26], "")
    item[64] = new Array(thisgb("FIX", "3"), n[2], n[26], "2023-03-08", "", n[4], "")
    item[65] = new Array(thisgb("FIX", "4"), n[2], n[29], "2023-03-15", "", n[4], "")
    item[66] = new Array(thisgb("FIX", "5"), n[2], n[4], "2023-03-22", "", n[29], "")
    item[67] = new Array(thisgb("FIX", "6"), n[2], n[4], "2023-03-29", "", n[29], "")
    item[68] = new Array(thisgb("FIX", "7"), n[29], n[26], "2023-04-12", "", n[2], "")
    item[69] = new Array(thisgb("FIX", "8"), n[29], n[26], "2023-04-19", "", n[2], "")
    item[70] = new Array(thisgb("FIX", "9"), n[4], n[26], "2023-04-26", "", n[29], "")
    item[71] = new Array(thisgb("FIX", "10"), n[4], n[26], "2023-05-03", "", n[29], "")
    item[72] = new Array(thisgb("FIX", "11"), n[2], n[4], "2023-05-10", "", n[26], "")
    item[73] = new Array(thisgb("FIX", "12"), n[29], n[4], "2023-05-17", "", n[26], "")
    item[74] = new Array(thisgb("FIX", "13"), n[29], n[26], "2023-05-24", "", n[2], "")
    item[75] = new Array(thisgb("FIX", "期末"), n[23], n[0], "x", "2023-05-24", n[0], "x")
    //改共筆改以上這段

    for (i=0; i<n_item; i++) {
        gb[i] = new Array() //建新array元素
    }

    for (i=0; i<n_item; i++) { //改寫item[][]成gb[][]
        if (item[i][0].indexOf("生理") > -1) {  //生理的共筆提早交
            for (j=0; j<7; j++) {
                if (j == 3) {
                    if (item[i][3] == "x") { //考古
                        gb[i][3] = "" //考古無上課日
                        continue;
                    } else {
                        dateParse = Date.parse(item[i][3] + "T00:00:01+08:00") //做期限日秒數轉換
                        d = new Date()
                        d = d.getTime() //當下毫秒
                        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                        gb[i][3] = count_d
                    }
                } else if (j == 4) { //交稿日
                    if (item[i][3] == "x") { //考古
                        dateParse = Date.parse(item[i][4] + "T00:00:01+08:00") //做期限日秒數轉換
                        d = new Date()
                        d = d.getTime() //當下毫秒
                        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                        gb[i][4] = count_d
                    } else {
                        //item[i][4] = getday2(item[i][3]) //其他人要從item[i][3]加1天
                        dateParse = Date.parse(item[i][3] + "T00:00:01+08:00") + 1* 86400000 //做期限日秒數轉換
                        d = new Date()
                        d = d.getTime() //當下毫秒
                        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                        gb[i][4] = count_d
                    }
                } else if (j == 6) { //審稿日
                    if (item[i][6] == "x") { //考古
                        gb[i][6] = "" //考古無上課日
                        continue;
                    } else {
                        //item[i][6] = getday3(item[i][3]) //其他人要從item[i][3]加2天
                        dateParse = Date.parse(item[i][3] + "T00:00:01+08:00") + 2 * 86400000 //做期限日秒數轉換
                        d = new Date()
                        d = d.getTime() //當下毫秒
                        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                        gb[i][6] = count_d 
                    }
                }
                else {
                    gb[i][j] = item[i][j]
                }
            }
        } else {
            for (j=0; j<7; j++) {
                if (j == 3) {
                    if (item[i][3] == "x") { //考古
                        gb[i][3] = "" //考古無上課日
                        continue;
                    } else {
                        dateParse = Date.parse(item[i][3] + "T00:00:01+08:00") //做期限日秒數轉換
                        d = new Date()
                        d = d.getTime() //當下毫秒
                        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                        gb[i][3] = count_d
                    }
                } else if (j == 4) { //交稿日
                    if (item[i][3] == "x") { //考古
                        dateParse = Date.parse(item[i][4] + "T00:00:01+08:00") //做期限日秒數轉換
                        d = new Date()
                        d = d.getTime() //當下毫秒
                        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                        gb[i][4] = count_d
                    } else {
                        //item[i][4] = getday2(item[i][3]) //其他人要從item[i][3]加2天
                        dateParse = Date.parse(item[i][3] + "T00:00:01+08:00") + 2* 86400000 //做期限日秒數轉換
                        d = new Date()
                        d = d.getTime() //當下毫秒
                        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                        gb[i][4] = count_d
                    }
                } else if (j == 6) { //審稿日
                    if (item[i][6] == "x") { //考古
                        gb[i][6] = "" //考古無上課日
                        continue;
                    } else {
                        //item[i][6] = getday3(item[i][3]) //其他人要從item[i][3]加3天
                        dateParse = Date.parse(item[i][3] + "T00:00:01+08:00") + 3 * 86400000 //做期限日秒數轉換
                        d = new Date()
                        d = d.getTime() //當下毫秒
                        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                        gb[i][6] = count_d 
                    }
                }
                else {
                    gb[i][j] = item[i][j]
                }
            }
        }
                
    }
    //把day0的拉進來
    day_0 = new Array()
    alert_name_ss = new Array() //寫手名單
    alert_name_sg = new Array() //審稿名單
    alert_name_ss_jiao = new Array() //今日交稿名單
    alert_name_sg_today = new Array() //今日審稿名單
    alert_name_kg = new Array() //考古名單
    n_layer_id = 1
    for (i=0; i<n_item; i++) {
        if (gb[i][3] === 0) {
            day_0.push(i) //創造day_0陣列儲存gb[i]寫手日為0的
        }
    }
    for (i=0; i<n_item; i++) {
        if (gb[i][4] === 0) {
            day_0.push(i) //day_0陣列儲存gb[i]交稿日為0的
        }
    }
    for (i=0; i<n_item; i++) {
        if (gb[i][6] === 0) {
            day_0.push(i) //day_0陣列儲存gb[i]寫手日為0的
        }
    }
    for (i=0; i<day_0.length; i++) {
        getTr('a'+ n_layer_id, 'print_today') //創層
        if (gb[day_0[i]][3] === 0) { //上課日:寫手與審稿均需出席
            for (j=0; j<7; j++) { 
                let $td = $('<td>') //創造元素
                n_layer_id_num = $('#a' + n_layer_id)
                if (j == 4 || j == 6) {
                    $td.text(gb[day_0[i]][j]).appendTo(n_layer_id_num)
                } else {
                    $td.text(gb[day_0[i]][j]).css('color', 'red').appendTo(n_layer_id_num) //賦予元素值，加到層之中
                    //加紅標css({property1: value1, property2: value2)
                }          
            }
            //alert當寫手
            // if (gb[day_0[i]][2] !== n[0]
            if (gb[day_0[i]][3] !== "" && jQuery.inArray(gb[day_0[i]][1], alert_name_ss) == -1) {
                alert_name_ss.push(gb[day_0[i]][1])
            }
            if (gb[day_0[i]][3] !== "" && jQuery.inArray(gb[day_0[i]][2], alert_name_ss) == -1) {
                alert_name_ss.push(gb[day_0[i]][2])
            }
            //alert審稿today
            if (gb[day_0[i]][3] !== "" && jQuery.inArray(gb[day_0[i]][5], alert_name_sg_today) == -1) {
                alert_name_sg_today.push(gb[day_0[i]][5])
            }
        } else if (gb[day_0[i]][4] === 0) { //交稿日:寫手交稿審稿審稿
            for (j=0; j<7; j++) { 
                let $td = $('<td>') //創造元素
                n_layer_id_num = $('#a' + n_layer_id)
                if (j == 3) {
                    $td.text(gb[day_0[i]][j]).appendTo(n_layer_id_num)
                } else {
                    $td.text(gb[day_0[i]][j]).css('color', 'red').appendTo(n_layer_id_num)
                }          
            }
            //alert交初稿
            if (gb[day_0[i]][3] !== "" && jQuery.inArray(gb[day_0[i]][1], alert_name_ss_jiao) == -1) {
                alert_name_ss_jiao.push(gb[day_0[i]][1])
            }
            if (gb[day_0[i]][3] !== "" && jQuery.inArray(gb[day_0[i]][2], alert_name_ss_jiao) == -1) {
                alert_name_ss_jiao.push(gb[day_0[i]][2])
            }
            //alert考古
            if (gb[day_0[i]][3] == "" && jQuery.inArray(gb[day_0[i]][1], alert_name_kg) == -1) {
                alert_name_kg.push(gb[day_0[i]][1])
            }
            if (gb[day_0[i]][3] == "" && jQuery.inArray(gb[day_0[i]][5], alert_name_kg) == -1) {
                alert_name_kg.push(gb[day_0[i]][5])
            }
        } else if (gb[day_0[i]][6] === 0) { //審稿日
            for (j=0; j<7; j++) { 
                let $td = $('<td>') //創造元素
                n_layer_id_num = $('#a' + n_layer_id)
                if (j == 5 || j == 6) {
                    $td.text(gb[day_0[i]][j]).css('color', 'red').appendTo(n_layer_id_num)
                } else if (j == 0) {
                    $td.text(gb[day_0[i]][j]).css('color', 'red').appendTo(n_layer_id_num)
                } else {
                    $td.text(gb[day_0[i]][j]).appendTo(n_layer_id_num)
                }
            }
            //alert交審稿
            if (gb[day_0[i]][5] !== n[0] && jQuery.inArray(gb[day_0[i]][5], alert_name_sg) == -1) {
                alert_name_sg.push(gb[day_0[i]][5])
            }
        }

        n_layer_id += 1
    }
    //alert那些人   
    alert(alert_name_f(alert_name_ss, "當寫手") + "\n" + alert_name_f(alert_name_sg_today, "當審稿")+ "\n\n" + alert_name_f(alert_name_ss_jiao, "交初稿")  + "\n" + alert_name_f(alert_name_sg, "交審稿") + "\n" + alert_name_f(alert_name_kg, "交考古"))
        
    n_layer_id = 1
    //審稿sorting
    for (i=1; i<=3; i++){
        for (j=0; j<n_item; j++) {
            if (gb[j][6] == i) { //if gb[j]審稿日為i，若求元素不在day_0裡(不重複)的話加條件:jQuery.inArray(j, day_0) == -1

                if(jQuery.inArray(j, day_0) == -1) {
                    day_0.push(j) //暫且把day_0陣列設成元素不重複
                }                

                getTr('b' + n_layer_id, 'print_sg') //創層
                for (k=0; k<7; k++) { 
                    let $td = $('<td>') //創造元素
                    n_layer_id_num = $('#b' + n_layer_id)
                    $td.text(gb[j][k]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
                }
                n_layer_id += 1
            }
        }        
    }
    //n_layer_id_tillnow = n_layer_id //等等後來的n_layer_id會重置
    n_layer_id = 1
    //寫手、考古sorting
    gb.sort((a, b) => a[4] - b[4])
    for (i=1; i<=7; i++){        
        for (j=0; j<n_item; j++) {            
            if (gb[j][4] == i) { //if gb[j]寫手日為i，若求元素不在day_0裡(不重複)的話加條件:jQuery.inArray(j, day_0) == -1
                
                if(jQuery.inArray(j, day_0) == -1) {
                    day_0.push(j) //暫且把day_0陣列設成元素不重複
                }                

                getTr('c' + n_layer_id, 'print_gb') //創層
                for (k=0; k<7; k++) { 
                    let $td = $('<td>') //創造元素
                    n_layer_id_num = $('#c' + n_layer_id)
                    $td.text(gb[j][k]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
                }
                n_layer_id += 1
            }
        }        
    }
    
    //做顯示全部
    $('#loadAll').on('click', () => {
        for (i=1; i<=n_layer_id; i++) { //再按一次鍵後清空所有數字(id=n_layer_id_tillnow~n_time)的<tr>
            if (document.getElementById('c'+i) !== null) {
                //alert(document.getElementById(i))
                document.getElementById('c'+i).remove("#c"+toString(i))
            }
        }

        //n_layer_id = n_layer_id_tillnow //n_layer_id重置
        n_layer_id = 1
        gb.sort((a, b) => a[4] - b[4])
        for (i=0; i<n_item; i++) {
            if (gb[i][4] > 0) {
                getTr('c' + n_layer_id, 'print_gb') //創層
                for (j=0; j<7; j++) { 
                    let $td = $('<td>') //創造元素
                    n_layer_id_num = $('#c' + n_layer_id)
                    $td.text(gb[i][j]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
                }
                n_layer_id += 1
            }
        }
    })
    $('#loadWeek').on('click', () => {
        for (i=1; i<=n_layer_id; i++) { //再按一次鍵後清空所有數字(id=n_layer_id_tillnow~n_time)的<tr>
            if (document.getElementById('c'+i) !== null) {
                //alert(document.getElementById(i))
                document.getElementById('c'+i).remove("#c"+toString(i))
            }
        }

        //n_layer_id = n_layer_id_tillnow //n_layer_id重置
        n_layer_id = 1
        gb.sort((a, b) => a[4] - b[4])
        for (i=0; i<n_item; i++) {
            if (gb[i][4] > 0 && gb[i][4] <= 7) {
                getTr('c' + n_layer_id, 'print_gb') //創層
                for (j=0; j<7; j++) { 
                    let $td = $('<td>') //創造元素
                    n_layer_id_num = $('#c' + n_layer_id)
                    $td.text(gb[i][j]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
                }
                n_layer_id += 1
            }
        }
    })
    //hover時變更顏色
    $('#loadAll').on({
        mouseenter: function() {
            $('#loadAll').addClass("load")
        },
        mouseleave: function() {
            $('#loadAll').removeClass("load")
        }
    })
    $("#loadAll").on("tap",function(){
        $('#loadAll').addClass("load")
        setTimeout(function() {
            $('#loadAll').removeClass("load")
        }, 200)
    })
    $('#loadWeek').on({
        mouseenter: function() {
            $('#loadWeek').addClass("load")
        },
        mouseleave: function() {
            $('#loadWeek').removeClass("load")
        }
    })
    $("#loadWeek").on("tap",function(){
        $('#loadWeek').addClass("load")
        setTimeout(function() {
            $('#loadWeek').removeClass("load")
        }, 200)
    })
})

function test() {
    $.ajax({URL:"../password.php", success:function(result){ //call url中的funcion
        $("div").text(result);
        $("#submit").remove();
        }
    })
}


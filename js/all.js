function getday_all(k, day) {
    var someDate = new Date(k);
    var numberOfDaysToAdd = day;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var g = new Date(result);
    if (g.getMonth()+1 < 10) {
        if (g.getDate() < 10) {
            return (g.getFullYear()+"-0"+(g.getMonth()+1)+"-0"+g.getDate() );
        } else {
            return (g.getFullYear()+"-0"+(g.getMonth()+1)+"-"+g.getDate() );
        }
    } else if (g.getDate() < 10) {
        return (g.getFullYear()+"-"+(g.getMonth()+1)+"-0"+g.getDate() );
    } else {
        return (g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate() );
    }    
}
var n_time = 0; //item_all[][0]的個數
function count_item() {
    return n_time++;
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
    const tr = document.createElement('tr'); //創建新的層的DOM節點
    tr.setAttribute('id', id); //賦予層元素id
    const past = document.getElementById(parentId);
    past.appendChild(tr); //從table的t_body下append節點到parentTd元素上
}
var arrowClick = 0;
document.getElementById("arrowClick").addEventListener("click", function(){
    if (arrowClick % 2 == 0) { //第一次按
        var element = document.getElementById("arrowClick")
        if (arrowClick == 0) {
            element.classList.add("image_rotate_90");
        } else {
            element.classList.remove("image_rotate_-90");
            element.classList.add("image_rotate_90");
        }
        setTimeout(() => {
            document.getElementById("gb_buy").style.display = 'block';
            document.getElementById("kg_buy").style.display = 'block';
        }, "1000")
    } else {
        var element = document.getElementById("arrowClick")
        element.classList.remove("image_rotate_90");
        element.classList.add("image_rotate_-90");
        document.getElementById("gb_buy").style.display = 'none';
        document.getElementById("kg_buy").style.display = 'none';
    }
    arrowClick +=1;
});

$(() => {
    //getTr(sorting_layer_id, 'print_all')

    //load 變數
    n = new Array(" ", "顏圓圓", "陳映璇", "呂欣蓉", "朱凱新", "何奕佑", "李崇愷", "王冠中", "馮文風", "曾子洋", "洪子淵", "陳庭禾", "洪秀峰", "夏家亨", "謝沛辰", "林裕凱", "", "謝沛葶", "凌卓軒", "蔡侁甫", "", "吳肇家", "李兆哲", "林育澤", "林琨祐", "", "黃昱賓", "黃淳暉", "黃聆歆", "葉亭妤", "蔡鈺程", "鄭丞佑", "戴均祐", "謝岳辰", "涂峻銓")
    
    
    item_all = document.createElement('item_all') //開一個DOM節點
    gb_all = document.createElement('gb_all') //開一個DOM節點
    item_all = new Array()
    gb_all = new Array()
    //改共筆改以下這段
    //item_all[ ] = new Array(thisgb(" ", " "), n[ ], n[ ], "2022- - ", "", n[ ], "") //(共筆, 寫手1, 寫手2, 寫手日, 交稿日, 審稿, 審稿日)
    item_all[0] = new Array(thisgb("口解", "1-1"), n[21], n[24], "2023-02-20", "", n[5], "")
    item_all[1] = new Array(thisgb("口解", "1-2"), n[11], n[21], "2023-03-06", "", n[24], "")
    item_all[2] = new Array(thisgb("口解", "1-3"), n[5], n[11], "2023-03-13", "", n[21], "")
    item_all[3] = new Array(thisgb("口解", "線上I"), n[24], n[5], "2023-03-13", "", n[11], "")
    item_all[4] = new Array(thisgb("口解", "2-1"), n[21], n[24], "2023-03-20", "", n[5], "")
    item_all[5] = new Array(thisgb("口解", "2-2"), n[11], n[21], "2023-03-27", "", n[24], "")
    item_all[6] = new Array(thisgb("口解", "2-3"), n[5], n[11], "2023-04-10", "", n[21], "")
    item_all[7] = new Array(thisgb("口解", "2-4"), n[24], n[5], "2023-04-17", "", n[11], "")
    item_all[8] = new Array(thisgb("口解", "3-1"), n[21], n[24], "2023-04-24", "", n[5], "")
    item_all[9] = new Array(thisgb("口解", "3-2"), n[11], n[21], "2023-05-01", "", n[24], "")
    item_all[10] = new Array(thisgb("口解", "4-1"), n[5], n[11], "2023-05-08", "", n[21], "")
    item_all[11] = new Array(thisgb("口解", "4-2"), n[24], n[5], "2023-05-15", "", n[11], "")
    item_all[12] = new Array(thisgb("口解", "5-1"), n[21], n[24], "2023-05-22", "", n[5], "")
    item_all[13] = new Array(thisgb("口解", "5-2"), n[11], n[21], "2023-05-29", "", n[24], "")
    item_all[14] = new Array(thisgb("口解", "線上II"), n[5], n[11], "2023-05-29", "", n[21], "")    
    item_all[15] = new Array(thisgb("口解", "期末"), n[1], n[0], "x", "2023-05-22", n[0], "x")
    item_all[16] = new Array(thisgb("胚胎", "1"), n[10], n[15], "2023-02-20", "", n[17], "")
    item_all[17] = new Array(thisgb("胚胎", "2"), n[17], n[15], "2023-03-13", "", n[28], "")
    item_all[18] = new Array(thisgb("胚胎", "3"), n[17], n[15], "2023-04-17", "", n[28], "")
    item_all[19] = new Array(thisgb("胚胎", "4"), n[17], n[10], "2023-04-25", "", n[28], "")
    item_all[20] = new Array(thisgb("胚胎", "5"), n[10], n[28], "2023-05-02", "", n[15], "")
    item_all[21] = new Array(thisgb("胚胎", "6"), n[10], n[28], "2023-05-16", "", n[17], "")    
    item_all[22] = new Array(thisgb("胚胎", "期末"), n[9], n[0], "x", "2023-05-23", n[0], "x")
    item_all[23] = new Array(thisgb("牙周", "1"), n[8], n[7], "2023-02-23", "", n[6], "")
    item_all[24] = new Array(thisgb("牙周", "2"), n[13], n[8], "2023-03-02", "", n[7], "")
    item_all[25] = new Array(thisgb("牙周", "3"), n[6], n[13], "2023-03-09", "", n[8], "")
    item_all[26] = new Array(thisgb("牙周", "4"), n[7], n[6], "2023-03-16", "", n[13], "")
    item_all[27] = new Array(thisgb("牙周", "5"), n[8], n[7], "2023-03-23", "", n[6], "")
    item_all[28] = new Array(thisgb("牙周", "6"), n[13], n[8], "2023-03-30", "", n[7], "")
    item_all[29] = new Array(thisgb("牙周", "7"), n[6], n[13], "2023-04-06", "", n[8], "")
    item_all[30] = new Array(thisgb("牙周", "8"), n[7], n[6], "2023-04-20", "", n[13], "")
    item_all[31] = new Array(thisgb("牙周", "9"), n[8], n[7], "2023-04-27", "", n[6], "")
    item_all[32] = new Array(thisgb("牙周", "10"), n[13], n[8], "2023-05-04", "", n[7], "")
    item_all[33] = new Array(thisgb("牙周", "11"), n[6], n[13], "2023-05-11", "", n[8], "")
    item_all[34] = new Array(thisgb("牙周", "12"), n[7], n[6], "2023-05-18", "", n[13], "")
    item_all[35] = new Array(thisgb("牙周", "13"), n[8], n[7], "2023-05-25", "", n[6], "")
    item_all[36] = new Array(thisgb("牙周", "期中"), n[3], n[0], "x", "2023-03-30", n[0], "x")
    item_all[37] = new Array(thisgb("牙周", "期末"), n[3], n[0], "x", "2023-05-18", n[0], "x")
    item_all[38] = new Array(thisgb("咬合", "1"), n[31], n[32], "2023-02-23", "", n[30], "")
    item_all[39] = new Array(thisgb("咬合", "2"), n[12], n[30], "2023-03-02", "", n[31], "")
    item_all[40] = new Array(thisgb("咬合", "3"), n[12], n[30], "2023-03-09", "", n[32], "")
    item_all[41] = new Array(thisgb("咬合", "4"), n[31], n[32], "2023-03-16", "", n[12], "")
    item_all[42] = new Array(thisgb("咬合", "5"), n[12], n[30], "2023-03-23", "", n[31], "")
    item_all[43] = new Array(thisgb("咬合", "6"), n[31], n[32], "2023-03-30", "", n[30], "")
    item_all[44] = new Array(thisgb("咬合", "7"), n[12], n[30], "2023-04-27", "", n[32], "")
    item_all[45] = new Array(thisgb("咬合", "8"), n[31], n[32], "2023-06-01", "", n[12], "")
    item_all[46] = new Array(thisgb("牙放", "1"), n[22], n[34], "2023-02-23", "", n[33], "")
    item_all[47] = new Array(thisgb("牙放", "2"), n[33], n[14], "2023-03-02", "", n[34], "")
    item_all[48] = new Array(thisgb("牙放", "3"), n[22], n[34], "2023-03-09", "", n[14], "")
    item_all[49] = new Array(thisgb("牙放", "4"), n[34], n[14], "2023-03-16", "", n[22], "")
    item_all[50] = new Array(thisgb("牙放", "5"), n[22], n[34], "2023-03-23", "", n[33], "")
    item_all[51] = new Array(thisgb("牙放", "6"), n[33], n[14], "2023-03-30", "", n[34], "")
    item_all[52] = new Array(thisgb("牙放", "7"), n[22], n[34], "2023-04-06", "", n[14], "")
    item_all[53] = new Array(thisgb("牙放", "8"), n[33], n[14], "2023-04-13", "", n[22], "")
    item_all[54] = new Array(thisgb("牙放", "9"), n[22], n[34], "2023-04-20", "", n[33], "")
    item_all[55] = new Array(thisgb("牙放", "10"), n[34], n[14], "2023-04-27", "", n[34], "")
    item_all[56] = new Array(thisgb("牙放", "11"), n[22], n[34], "2023-05-04", "", n[14], "")
    item_all[57] = new Array(thisgb("牙放", "12"), n[33], n[14], "2023-05-11", "", n[22], "")
    item_all[58] = new Array(thisgb("牙放", "13"), n[22], n[34], "2023-05-18", "", n[33], "")
    item_all[59] = new Array(thisgb("牙放", "14"), n[34], n[14], "2023-05-25", "", n[34], "")
    item_all[60] = new Array(thisgb("牙放", "15"), n[22], n[34], "2023-06-01", "", n[14], "")
    item_all[61] = new Array(thisgb("牙放", "期末"), n[27], n[0], "x", "2023-05-25", n[0], "x")
    item_all[62] = new Array(thisgb("FIX", "1"), n[2], n[26], "2023-02-22", "", n[4], "")
    item_all[63] = new Array(thisgb("FIX", "2"), n[2], n[29], "2023-03-01", "", n[26], "")
    item_all[63] = new Array(thisgb("FIX", "3"), n[2], n[26], "2023-03-08", "", n[4], "")
    item_all[64] = new Array(thisgb("FIX", "4"), n[2], n[29], "2023-03-15", "", n[4], "")
    item_all[65] = new Array(thisgb("FIX", "5"), n[2], n[4], "2023-03-22", "", n[29], "")
    item_all[66] = new Array(thisgb("FIX", "6"), n[2], n[4], "2023-03-29", "", n[29], "")
    item_all[67] = new Array(thisgb("FIX", "7"), n[29], n[26], "2023-04-12", "", n[2], "")
    item_all[68] = new Array(thisgb("FIX", "8"), n[29], n[26], "2023-04-19", "", n[2], "")
    item_all[69] = new Array(thisgb("FIX", "9"), n[4], n[26], "2023-04-26", "", n[29], "")
    item_all[70] = new Array(thisgb("FIX", "10"), n[4], n[26], "2023-05-03", "", n[29], "")
    item_all[71] = new Array(thisgb("FIX", "11"), n[2], n[4], "2023-05-10", "", n[26], "")
    item_all[72] = new Array(thisgb("FIX", "12"), n[29], n[4], "2023-05-17", "", n[26], "")
    item_all[74] = new Array(thisgb("FIX", "13"), n[29], n[26], "2023-05-24", "", n[2], "")
    item_all[73] = new Array(thisgb("FIX", "期末"), n[23], n[0], "x", "2023-05-24", n[0], "x")
    //改共筆改以上這段

    item_buy = new Array()
    item_buy = document.createElement('item_buy')
    //改購買的共筆改以下這段
    item_buy[0] = new Array("共筆", "大體", n[4], n[32], n[33])
    item_buy[1] = new Array("共筆", "組織", n[32], n[33])
    item_buy[2] = new Array("共筆", "神解", n[32], n[33])
    item_buy[3] = new Array("共筆", "胚胎", n[33])
    item_buy[4] = new Array("共筆", "口解")
    item_buy[5] = new Array("共筆", "FIX", n[3], n[30])
    item_buy[6] = new Array("共筆", "牙周", n[30])
    item_buy[7] = new Array("共筆", "咬合", n[3], n[30])
    item_buy[8] = new Array("共筆", "牙放", n[30])
    item_buy[9] = new Array("考古", "大體", n[1], n[3], n[4], n[5], n[6], n[7], n[9], n[10], n[13], n[17], n[19], n[22], n[23], n[24], n[27], n[28], n[29], n[30], n[31], n[32], n[33])
    item_buy[10] = new Array("考古", "組織", n[1], n[3], n[4], n[5], n[6], n[9], n[10], n[13], n[17], n[19], n[22], n[23], n[24], n[27], n[28], n[30], n[31], n[32], n[33])
    item_buy[11] = new Array("考古", "神解", n[1], n[3], n[4], n[5], n[6], n[7], n[9], n[10], n[13], n[17], n[19], n[22], n[23], n[24], n[27], n[28], n[30], n[31], n[32], n[33])
    item_buy[12] = new Array("考古", "胚胎", n[1], n[3], n[4], n[5], n[6], n[7], n[9], n[10], n[13], n[17], n[19], n[23], n[24], n[28], n[30], n[31], n[32], n[33])
    item_buy[13] = new Array("考古", "口解", n[1], n[3], n[4], n[5], n[6], n[7], n[9], n[10], n[13], n[17], n[19], n[23], n[24], n[28], n[30], n[31], n[33])
    item_buy[14] = new Array("考古", "FIX", n[1], n[3], n[4], n[5], n[6], n[7], n[9], n[10], n[13], n[17], n[19], n[23], n[24], n[28], n[30], n[31], n[33])
    item_buy[15] = new Array("考古", "牙周", n[1], n[3], n[4], n[5], n[6], n[7], n[9], n[10], n[13], n[17], n[19], n[23], n[24], n[28], n[30], n[31], n[33])
    item_buy[16] = new Array("考古", "咬合", n[1], n[3], n[4], n[5], n[6], n[7], n[9], n[10], n[13], n[17], n[19], n[23], n[24], n[28], n[30], n[31], n[33])
    item_buy[17] = new Array("考古", "牙放", n[1], n[3], n[4], n[5], n[6], n[7], n[9], n[10], n[13], n[17], n[19], n[23], n[24], n[28], n[30], n[31], n[33])
    //改購買的共筆改以上這段    

    $('#yourname').keypress(function(e) { //按enter鍵也觸發#enter_name的onclick()事件
        key = window.event ? e.keyCode : e.which
        if (key == 13) {
            $('#enter_name').trigger("click")
        }
    })
    $('#enter_name').on('click', () => {        
        sorting_layer_id = 1
        //刪既存編號數字id的tr
        //var del = document.querySelector('removable')
        for (i=0; i<200; i++) { //再按一次鍵後清空所有數字(id="1"~"99")的<tr>
            if (document.getElementById(i) !== null) {
                //alert(document.getElementById(i))
                document.getElementById(i).remove("#"+toString(i))
            }
        }

        yourname = $('#yourname').val() //儲存輸入的名字字串
        if ($.isNumeric(yourname) == true) { //若輸入座號則儲存成名字
            if (yourname == 18) {
                alert(n[yourname] + ": 朋友，你返印度食蕉啦")
            }
            yourname = n[yourname]
        }
        $('#yourname').val('') //清除<input>中字串
        $('#nameBlank').text(yourname) //放上姓名
        for (i=0; i<n_time; i++) {
            gb_all[i] = new Array() //建新array元素
        }
        for (i=0; i<n_time; i++) { //改寫item_all[][]成gb_all[][]
            x = new Array()
            x = item_all[i]
            if (x[0].indexOf("生理") > -1) {  //生理共筆提早交
                for (j=0; j<7; j++) {
                    if (j == 3) {
                        if (item_all[i][3] == "x") { //考古
                            gb_all[i][3] = "" //考古無上課日
                            continue;
                        } else {
                            dateParse = Date.parse(item_all[i][3] + "T00:00:01+08:00") //做期限日秒數轉換
                            d = new Date()
                            d = d.getTime() //當下毫秒
                            count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                            count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                            gb_all[i][3] = count_d
                        }
                    } else if (j == 4) { //交稿日
                        if (item_all[i][3] == "x") { //考古
                            dateParse = Date.parse(item_all[i][4] + "T00:00:01+08:00") //做期限日秒數轉換
                            d = new Date()
                            d = d.getTime() //當下毫秒
                            count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                            count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                            gb_all[i][4] = count_d
                        } else {
                            //item_all[i][4] = getday_all(item_all[i][3], 1) //其他人要從item_all[i][3]加1天
                            dateParse = Date.parse(item_all[i][3] + "T00:00:01+08:00") + 1 * 86400000 //做期限日秒數轉換
                            d = new Date()
                            d = d.getTime() //當下毫秒
                            count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                            count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                            gb_all[i][4] = count_d
                        }
                    } else if (j == 6) { //審稿日
                        if (item_all[i][6] == "x") { //考古
                            gb_all[i][6] = "" //考古無上課日
                            continue;
                        } else {
                            //item_all[i][6] = getday_all(item_all[i][3], 2) //其他人要從item_all[i][3]加2天
                            dateParse = Date.parse(item_all[i][3] + "T00:00:01+08:00") + 2 * 86400000 //做期限日秒數轉換
                            d = new Date()
                            d = d.getTime() //當下毫秒
                            count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                            count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                            gb_all[i][6] = count_d 
                        }
                    }
                    else {
                        gb_all[i][j] = item_all[i][j]
                    }
                } 
            } else {
                for (j=0; j<7; j++) {
                    if (j == 3) {
                        if (item_all[i][3] == "x") { //考古
                            gb_all[i][3] = "" //考古無上課日
                            continue;
                        } else {
                            dateParse = Date.parse(item_all[i][3] + "T00:00:01+08:00") //做期限日秒數轉換
                            d = new Date()
                            d = d.getTime() //當下毫秒
                            count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                            count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                            gb_all[i][3] = count_d
                        }
                    } else if (j == 4) { //交稿日
                        if (item_all[i][3] == "x") { //考古
                            dateParse = Date.parse(item_all[i][4] + "T00:00:01+08:00") //做期限日秒數轉換
                            d = new Date()
                            d = d.getTime() //當下毫秒
                            count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                            count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                            gb_all[i][4] = count_d
                        } else {
                            //item_all[i][4] = getday_all(item_all[i][3], 2) //其他人要從item_all[i][3]加2天
                            dateParse = Date.parse(item_all[i][3] + "T00:00:01+08:00") + 2 * 86400000 //做期限日秒數轉換
                            d = new Date()
                            d = d.getTime() //當下毫秒
                            count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                            count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                            gb_all[i][4] = count_d
                        }
                    } else if (j == 6) { //審稿日
                        if (item_all[i][6] == "x") { //考古
                            gb_all[i][6] = "" //考古無上課日
                            continue;
                        } else {
                            //item_all[i][6] = getday_all(item_all[i][3], 3) //其他人要從item_all[i][3]加3天
                            dateParse = Date.parse(item_all[i][3] + "T00:00:01+08:00") + 3 * 86400000 //做期限日秒數轉換
                            d = new Date()
                            d = d.getTime() //當下毫秒
                            count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                            count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                            gb_all[i][6] = count_d 
                        }
                    }
                    else {
                        gb_all[i][j] = item_all[i][j]
                    }
                } 
            }                   
        }
        
        //2D all陣列記錄待輸出值
        all = document.createElement('all') //開一個DOM節點
        all = new Array()
        num_all = 0 //all[?]有幾個
        //sorting_layer_id = 1 //每層<tr>的id
        for (i=0; i<n_time; i++) { //all[][]記錄值
            if (item_all[i][1] == yourname || item_all[i][2] == yourname) {
                all[num_all] = new Array()

                if (item_all[i][3] == "x") { //考古人士
                    all[num_all] = new Array(item_all[i][0], "考古", item_all[i][5], item_all[i][4].replace(/.{5}/, ""), gb_all[i][4])
                }
                else if (item_all[i][1] == yourname) { //寫手人士 && 名字==item[j][1]
                    all[num_all++] = new Array(item_all[i][0], "寫手(課)", item_all[i][2], item_all[i][3].replace(/.{5}/, ""), gb_all[i][3])
                    all[num_all] = new Array(item_all[i][0], "寫手(交)", item_all[i][2], getday_all(item_all[i][3], 2).replace(/.{5}/, ""), gb_all[i][4])
                }
                else { //寫手人士 && 名字==item[j][2]
                    all[num_all++] = new Array(item_all[i][0], "寫手(課)", item_all[i][1], item_all[i][3].replace(/.{5}/, ""), gb_all[i][3])
                    all[num_all] = new Array(item_all[i][0], "寫手(交)", item_all[i][1], getday_all(item_all[i][3], 2).replace(/.{5}/, ""), gb_all[i][4])
                }
                num_all += 1 //計數
            }
            else if (item_all[i][5] == yourname && item_all[i][3] !== "x") { //審稿人士
                all[num_all] = new Array(item_all[i][0], "審稿", "", getday_all(item_all[i][3], 3).replace(/.{5}/, ""), gb_all[i][6])
                num_all += 1 //計數
            } else if (item_all[i][5] == yourname && item_all[i][3] == "x") { //考古的審稿
                all[num_all] = new Array(item_all[i][0], "考古(審)", item_all[i][1], item_all[i][4].replace(/.{5}/, ""), gb_all[i][4])
                num_all += 1 //計數
            }
        }
        all.sort((a, b) => a[4] - b[4])
        for (i=0; i<num_all; i++) {
            getTr(sorting_layer_id, 'print_all')
            for (j=0; j<7; j++) { 
                let $td = $('<td class="removable">') //創造元素
                n_sorting_layer_id_num = $('#' + sorting_layer_id)
                if (all[i][4] == 0) {
                    $td.text(all[i][j]).css('color', 'red').appendTo(n_sorting_layer_id_num) //賦予元素值，加到層之中
                    //加紅標css({property1: value1, property2: value2)
                } else if (all[i][4] < 0) {
                    all[i][4] = "已過"
                    $td.text(all[i][j]).appendTo(n_sorting_layer_id_num) //賦予元素值，加到層之中
                } else {
                    $td.text(all[i][j]).appendTo(n_sorting_layer_id_num) //賦予元素值，加到層之中
                }
                          
            }
            sorting_layer_id += 1
        }
        
        //以下為共筆購買搜尋
        gb_buy = new Array()
        kg_buy = new Array()
        for (i=0; i<14; i++) { //這邊記得中間改成全部共筆的個數
            if (jQuery.inArray(yourname, item_buy[i]) !== -1) {
                if (item_buy[i][0] == "共筆") {
                    gb_buy.push(item_buy[i][1])
                }
                if (item_buy[i][0] == "考古") {
                    kg_buy.push(item_buy[i][1])
                }
            }
        }
        $('#gb_buy').text("購買共筆：" + gb_buy.join('.')) //輸出，用join隔開元素
        $('#kg_buy').text("購買考古：" + kg_buy.join('.')) //輸出，用join隔開元素
    })
})

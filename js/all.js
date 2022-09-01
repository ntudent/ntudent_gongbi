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
    item_all[0] = new Array(thisgb("生理", "1"), n[29], n[26], "2022-09-05", "", n[2], "")
    item_all[1] = new Array(thisgb("生理", "2"), n[29], n[2], "2022-09-12", "", n[26], "")
    item_all[2] = new Array(thisgb("生理", "3"), n[22], n[34], "2022-09-19", "", n[14], "")
    item_all[3] = new Array(thisgb("生理", "4"), n[33], n[14], "2022-09-26", "", n[34], "")
    item_all[4] = new Array(thisgb("生理", "5"), n[2], n[4], "2022-10-03", "", n[29], "")
    item_all[5] = new Array(thisgb("生理", "6"), n[34], n[14], "2022-10-17", "", n[22], "")
    item_all[6] = new Array(thisgb("生理", "Lab2/3"), n[22], n[34], "2022-10-24", "", n[33], "")
    item_all[7] = new Array(thisgb("生理", "期中"), n[27], n[0], "x", "2022-10-17", n[9], "x")
    item_all[8] = new Array(thisgb("生理", "7"), n[29], n[26], "2022-11-07", "", n[4], "")
    item_all[9] = new Array(thisgb("生理", "8"), n[2], n[4], "2022-11-14", "", n[26], "")
    item_all[10] = new Array(thisgb("生理", "9"), n[22], n[34], "2022-11-21", "", n[14], "")
    item_all[11] = new Array(thisgb("生理", "10"), n[34], n[14], "2022-11-28", "", n[22], "")
    item_all[12] = new Array(thisgb("生理", "Lab4"), n[2], n[26], "2022-12-05", "", n[4], "")
    item_all[13] = new Array(thisgb("生理", "期末"), n[27], n[0], "x", "2022-12-05", n[9], "x")
    item_all[14] = new Array(thisgb("生理", "11"), n[4], n[26], "2022-12-12", "", n[29], "")
    item_all[15] = new Array(thisgb("OD", "1"), n[31], n[32], "2022-09-07", "", n[30], "")
    item_all[16] = new Array(thisgb("OD", "2"), n[30], n[12], "2022-10-05", "", n[32], "")
    item_all[17] = new Array(thisgb("OD", "3"), n[31], n[32], "2022-10-12", "", n[12], "")
    item_all[18] = new Array(thisgb("OD", "期中"), n[1], n[0], "x", "2022-10-12", n[23], "x")
    item_all[19] = new Array(thisgb("OD", "4"), n[30], n[12], "2022-11-02", "", n[31], "")
    item_all[20] = new Array(thisgb("OD", "5"), n[31], n[32], "2022-11-09", "", n[30], "")
    item_all[21] = new Array(thisgb("OD", "6"), n[31], n[32], "2022-11-23", "", n[12], "")
    item_all[22] = new Array(thisgb("OD", "7"), n[30], n[12], "2022-12-14", "", n[32], "")
    item_all[23] = new Array(thisgb("OD", "期末"), n[1], n[0], "x", "2022-12-07", n[23], "x")
    //改共筆改以上這段

    item_buy = new Array()
    item_buy = document.createElement('item_buy')
    //改購買的共筆改以下這段
    item_buy[0] = new Array("共筆", "OD", n[2], n[5], n[6], n[12], n[21], n[30], n[33])
    item_buy[1] = new Array("共筆", "口胚", n[2], n[3], n[5], n[6], n[12], n[21], n[30], n[33])
    item_buy[2] = new Array("共筆", "口解", n[2], n[3], n[5], n[6], n[12], n[21], n[22], n[30], n[33])
    item_buy[3] = new Array("共筆", "大體", n[2], n[3], n[5], n[6], n[12], n[21], n[22], n[30], n[33])
    item_buy[4] = new Array("共筆", "生理", n[2], n[5], n[6], n[8], n[12], n[21], n[30], n[33])
    item_buy[5] = new Array("共筆", "組織", n[2], n[3], n[5], n[6], n[12], n[21], n[22], n[30], n[33])
    item_buy[6] = new Array("共筆", "胚胎", n[2], n[5], n[6], n[12], n[21], n[30], n[33])
    item_buy[7] = new Array("考古", "OD", n[1], n[2], n[3], n[4], n[5], n[6], n[9], n[12], n[19], n[21], n[23], n[24], n[30], n[33])
    item_buy[8] = new Array("考古", "口胚", n[1], n[2],n[3], n[4], n[5], n[6], n[9], n[12], n[19], n[21], n[23], n[24], n[30], n[33])
    item_buy[9] = new Array("考古", "口解", n[1], n[2], n[3], n[4], n[5], n[6], n[9], n[12], n[19], n[21], n[23], n[24], n[30], n[33])
    item_buy[10] = new Array("考古", "大體", n[1], n[2], n[3], n[4], n[5], n[6], n[9], n[12], n[19], n[21], n[22], n[23], n[24], n[30], n[33])
    item_buy[11] = new Array("考古", "生理", n[1], n[2], n[3], n[4], n[5], n[6], n[8], n[9], n[12], n[19], n[21], n[23], n[24], n[30], n[33])
    item_buy[12] = new Array("考古", "組織", n[1], n[2], n[3], n[4], n[5], n[6], n[9], n[12], n[19], n[21], n[22], n[23], n[24], n[30], n[33])
    item_buy[13] = new Array("考古", "胚胎", n[1], n[2], n[3], n[4], n[5], n[6], n[9], n[12], n[19], n[21], n[23], n[24], n[30], n[33])
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

function getday_all(k) {
    var someDate = new Date(k);
    var numberOfDaysToAdd = 7;
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
var n_time = 0;
function count_item() {
    return n_time++;
}
function thisgb(gb_name, week) {
    count_item();
    if ($.isNumeric(week)) {
        return (gb_name + " Week " + week);
    }
    else {
        return (gb_name + week);
    }
}
function getTr(id, parentId) {
    const tr = document.createElement('tr') //創建新的層的DOM節點
    tr.setAttribute('id', id) //賦予層元素id
    const past = document.getElementById(parentId) 
    past.appendChild(tr) //從table的t_body下append節點到parentTd元素上
}
$(() => {
    //getTr(sorting_layer_id, 'print_all')

    //load 變數
    n = new Array(" ", "顏圓圓", "陳映璇", "呂欣蓉", "朱凱新", "何奕佑", "李崇愷", "王冠中", "馮文風", "曾子洋", "洪子淵", "陳庭禾", "洪秀峰", "夏家亨", "謝沛辰", "林裕凱", "", "謝沛葶", "凌卓軒", "蔡侁甫", "", "吳肇家", "李兆哲", "林育澤", "林琨祐", "", "黃昱賓", "黃淳暉", "黃聆歆", "葉亭妤", "蔡鈺程", "鄭丞佑", "戴均祐", "謝岳辰", "涂峻銓")
    
    
    item_all = document.createElement('item_all') //開一個DOM節點
    gb_all = document.createElement('gb_all') //開一個DOM節點
    item_all = new Array()
    gb_all = new Array()
    //改共筆改以下這段
    item_all[0] = new Array(thisgb("OD", "1"), n[19], n[23], "2022-07-01", n[17], "") //(共筆, 寫手1, 寫手2, 寫手日, 審稿, 審稿日)
    item_all[1] = new Array(thisgb("OD", "2"), n[1], n[19], "2022-07-02", n[10], "")
    item_all[2] = new Array(thisgb("生理", "1"), n[2], n[9], "2022-06-30", n[19], "")
    item_all[3] = new Array(thisgb("口解", "考古"), n[17], n[0], "2022-07-01", n[0], "x")
    item_all[4] = new Array(thisgb("醫人", "1"), n[3], n[19], "2022-06-26", n[8], "")
    item_all[5] = new Array(thisgb("醫人", "2"), n[21], n[19], "2022-06-30", n[7], "")
    item_all[6] = new Array(thisgb("醫人", "3"), n[4], n[19], "2022-07-01", n[26], "")
    item_all[7] = new Array(thisgb("醫人", "0"), n[5], n[6], "2022-06-25", n[19], "")
    //改共筆改以上這段

    $('#enter_name').on('click', () => {        
        sorting_layer_id = 1
        //刪既存編號數字id的tr
        //var del = document.querySelector('removable')
        for (i=0; i<100; i++) {
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
        for (i=0; i<n_time; i++) {
            for (j=0; j<6; j++) {
                if (j==3 || j==5) {
                    if (j==5 && item_all[i][5] == "") {
                        item_all[i][5] = getday_all(item_all[i][3]) //審稿日=期限日+7天
                    }
                    else if (j==5 && item_all[i][5] == "x"){
                        gb_all[i][5] = "" //考古無審稿日
                        continue
                    }
                    dateParse = Date.parse(item_all[i][j] + " 00:00:01") //做期限日秒數轉換
                    d = new Date()
                    d = d.getTime() //當下毫秒
                    count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                    count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                    gb_all[i][j] = count_d 
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
                all[num_all] = new Array

                if (item_all[i][5] == "x") { //考古人士
                    all[num_all] = new Array(item_all[i][0], "考古", "", item_all[i][3], gb_all[i][3])
                }
                else if (item_all[i][1] == yourname) { //寫手人士 && 名字==item[j][1]
                    all[num_all] = new Array(item_all[i][0], "寫手", item_all[i][2], item_all[i][3], gb_all[i][3])
                }
                else { //寫手人士 && 名字==item[j][2]
                    all[num_all] = new Array(item_all[i][0], "寫手", item_all[i][1], item_all[i][3], gb_all[i][3])
                }
                num_all += 1 //計數
            }
            else if (item_all[i][4] == yourname) { //審稿人士
                all[num_all] = new Array(item_all[i][0], "審稿", "", item_all[i][5], gb_all[i][5])
                num_all += 1 //計數
            }
        }
        for (i=-7; i<200; i++) {
            for (j=0; j<num_all; j++) { //輸出
                if (all[j][4] == i) {
                    getTr(sorting_layer_id, 'print_all')
                    for (k=0; k<6; k++) { 
                        let $td = $('<td class="removable">') //創造元素
                        n_sorting_layer_id_num = $('#' + sorting_layer_id)
                        if (i == 0) {
                            $td.text(all[j][k]).css('color', 'red').appendTo(n_sorting_layer_id_num) //賦予元素值，加到層之中
                            //加紅標css({property1: value1, property2: value2)
                        } else if (i < 0) {
                            all[j][4] = "已過"
                            $td.text(all[j][k]).appendTo(n_sorting_layer_id_num) //賦予元素值，加到層之中
                        } else {
                            $td.text(all[j][k]).appendTo(n_sorting_layer_id_num) //賦予元素值，加到層之中
                        }
                                  
                    }
                    sorting_layer_id += 1
                }
            }
        }
        
        
    
    })
})

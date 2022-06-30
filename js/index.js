function getday(k) {
    var someDate = new Date(k);
    var numberOfDaysToAdd = 7;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var g = new Date(result);
    return ("\""+g.getFullYear()+"-"+(g.getMonth()+1)+"-"+g.getDate()+"\"" );
}
var n_item = 0;
function count_item() {
    return n_item++;
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
function alert_name_f (alert_name) {
    var a = "";
    for (i=0; i<alert_name.length-1; i++) {
        a += alert_name[i];
        a += "及";
    }
    a += alert_name[alert_name.length-1]
    return ("今天當寫手的人類: " + a);
}

$(() => {
    
    item = document.createElement('item') //開一個DOM節點
    gb = document.createElement('gb') //開一個DOM節點
    
    n_0 = ""
    n_1 = "顏圓圓"
    n_2 = "陳映璇"
    n_3 = "呂欣蓉"
    n_4 = "朱凱新"
    n_5 = "何奕佑"
    n_6 = "李崇愷"
    n_7 = "王冠中"
    n_8 = "馮文風"
    n_9 = "曾子洋"
    n_10 = "洪子淵"
    n_11 = "陳庭禾"
    n_12 = "洪秀峰"
    n_13 = "夏家亨"
    n_14 = "謝沛辰"
    n_15 = "林裕凱"
    n_17 = "謝沛葶"
    n_19 = "蔡侁甫"
    n_21 = "吳肇家"
    n_22 = "李兆哲"
    n_23 = "林育澤"
    n_24 = "林琨祐"
    n_26 = "黃昱賓"
    n_27 = "黃淳暉"
    n_28 = "黃聆歆"
    n_29 = "葉亭妤"
    n_30 = "蔡鈺程"
    n_31 = "鄭丞佑"
    n_32 = "戴均祐"
    n_33 = "謝岳辰"
    n_34 = "涂峻銓"

    item = new Array()
    item[0] = new Array(thisgb("OD", "1"), n_19, n_23, "2022-06-30", n_19, "") //(共筆, 寫手1, 寫手2, 寫手日, 審稿, 審稿日)
    item[1] = new Array(thisgb("OD", "2"), n_19, n_19, "2022-07-01", n_19, "")
    item[2] = new Array(thisgb("生理", "1"), n_19, n_19, "2022-06-28", n_19, "")
    item[3] = new Array(thisgb("口解", "考古"), n_17, n_0, "2022-06-30", n_0, "x")
    item[4] = new Array(thisgb("醫人", "1"), n_19, n_19, "2022-06-25", n_19, "")
    item[5] = new Array(thisgb("醫人", "2"), n_19, n_19, "2022-06-29", n_19, "")
    item[6] = new Array(thisgb("醫人", "3"), n_19, n_19, "2022-06-30", n_19, "")
    item[7] = new Array(thisgb("醫人", "0"), n_19, n_19, "2022-06-24", n_19, "")
    for (i=0; i<n_item; i++) {
        gb[i] = new Array() //建新array元素
    }

    for (i=0; i<n_item; i++) { //改寫item[][]成gb[][]
        for (j=0; j<6; j++) {
            if (j==3 || j==5) {
                if (j==5 && item[i][5] == "") {
                    item[i][5] = getday(item[i][3]) //審稿日=期限日+7天
                }
                else if (j==5 && item[i][5] == "x"){
                    gb[i][5] = "" //考古無審稿日
                    continue
                }
                dateParse = Date.parse(item[i][j] + " 00:00:01") //做期限日秒數轉換
                d = new Date()
                d = d.getTime() //當下毫秒
                count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
                count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
                gb[i][j] = count_d 
            }
            else {
                gb[i][j] = item[i][j]
            }
        }        
    }

    //把day0的拉進來
    day_0 = new Array()
    alert_name = new Array()
    n_layer_id = 1
    for (i=0; i<n_item; i++) {
        if (gb[i][3] == 0) {
            day_0.push(i) //創造day_0陣列儲存gb[i]寫手日為0的
        }
    }
    for (i=0; i<day_0.length; i++) {
        getTr(n_layer_id, 'print_today') //創層       
        for (j=0; j<6; j++) { 
            let $td = $('<td>') //創造元素
            n_layer_id_num = $('#' + n_layer_id)
            $td.text(gb[day_0[i]][j]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
        }

        n_layer_id += 1
        //alert那些人
        if (gb[day_0[i]][2] !== "" && jQuery.inArray(gb[day_0[i]][1], alert_name) == -1) {
            alert_name.push(gb[day_0[i]][1])
        }
        if (gb[day_0[i]][2] !== "" && jQuery.inArray(gb[day_0[i]][2], alert_name) == -1) {
            alert_name.push(gb[day_0[i]][2])
        }
    }
    //alert那些人
    alert (alert_name_f(alert_name))
    
    
    //審稿sorting
    for (i=1; i<=6; i++){
        for (j=0; j<n_item; j++) {
            if (gb[j][5] == i) { //if gb[j]審稿日為i，若求元素不在day_0裡(不重複)的話加條件:jQuery.inArray(j, day_0) == -1

                if(jQuery.inArray(j, day_0) == -1) {
                    day_0.push(j) //暫且把day_0陣列設成元素不重複
                }                

                getTr(n_layer_id, 'print_sg') //創層
                for (k=0; k<6; k++) { 
                    let $td = $('<td>') //創造元素
                    n_layer_id_num = $('#' + n_layer_id)
                    $td.text(gb[j][k]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
                }
                n_layer_id += 1
            }
        }        
    }

    //寫手sorting
    for (i=1; i<=7; i++){
        
        for (j=0; j<n_item; j++) {
            
            if (gb[j][3] == i) { //if gb[j]寫手日為i，若求元素不在day_0裡(不重複)的話加條件:jQuery.inArray(j, day_0) == -1
                
                if(jQuery.inArray(j, day_0) == -1) {
                    day_0.push(j) //暫且把day_0陣列設成元素不重複
                }                

                getTr(n_layer_id, 'print_gb') //創層
                for (k=0; k<6; k++) { 
                    let $td = $('<td>') //創造元素
                    n_layer_id_num = $('#' + n_layer_id)
                    $td.text(gb[j][k]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
                }
                n_layer_id += 1
            }
        }        
    }
    
    for (i=0; i<n_item; i++) {
        break
        getTr(n_layer_id, 'print_gb')


        for (j=0; j<6; j++) { 
            let $td = $('<td>') //創造元素
            n_layer_id_num = $('#' + n_layer_id)
            $td.text(gb[i][j]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
        }
        n_layer_id += 1
        //setTimeout('console.log()', 10000)延時播放
    }
    
    
    
    
})

function test() {
    $.ajax({URL:"../password.php", success:function(result){ //call url中的funcion
        $("div").text(result);
        $("#submit").remove();
        }
    })
}


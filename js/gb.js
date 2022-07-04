function getday(k) {
    var someDate = new Date(k);
    var numberOfDaysToAdd = 7;
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
        return (gb_name + " Week " + week);
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
$(() => {
    
    item = document.createElement('item') //開一個DOM節點
    gb = document.createElement('gb') //開一個DOM節點
    
    n = new Array(" ", "顏圓圓", "陳映璇", "呂欣蓉", "朱凱新", "何奕佑", "李崇愷", "王冠中", "馮文風", "曾子洋", "洪子淵", "陳庭禾", "洪秀峰", "夏家亨", "謝沛辰", "林裕凱", "", "謝沛葶", "凌卓軒", "蔡侁甫", "", "吳肇家", "李兆哲", "林育澤", "林琨祐", "", "黃昱賓", "黃淳暉", "黃聆歆", "葉亭妤", "蔡鈺程", "鄭丞佑", "戴均祐", "謝岳辰", "涂峻銓")

    item = new Array()
    //改共筆改以下這段
    item[0] = new Array(thisgb("OD", "1"), n[19], n[23], "2022-07-05", n[17], "") //(共筆, 寫手1, 寫手2, 寫手日, 審稿, 審稿日)
    item[1] = new Array(thisgb("OD", "2"), n[1], n[19], "2022-07-05", n[10], "")
    item[2] = new Array(thisgb("生理", "1"), n[2], n[9], "2022-07-04", n[19], "")
    item[3] = new Array(thisgb("口解", "考古"), n[17], n[0], "2022-07-03", n[0], "x")
    item[4] = new Array(thisgb("醫人", "1"), n[3], n[19], "2022-06-26", n[8], "")
    item[5] = new Array(thisgb("醫人", "2"), n[21], n[19], "2022-06-30", n[7], "")
    item[6] = new Array(thisgb("醫人", "3"), n[4], n[19], "2022-07-01", n[26], "")
    item[7] = new Array(thisgb("醫人", "0"), n[5], n[6], "2022-06-29", n[19], "")
    item[8] = new Array(thisgb("胚胎", "0"), n[33], n[34], "2022-07-04", n[19], "")
    item[9] = new Array(thisgb("胚胎", "1"), n[33], n[34], "2022-07-05", n[19], "")
    item[10] = new Array(thisgb("胚胎", "2"), n[33], n[34], "2022-07-06", n[19], "")
    item[11] = new Array(thisgb("胚胎", "3"), n[33], n[34], "2022-07-07", n[19], "")
    item[12] = new Array(thisgb("生理", "考古"), n[29], n[0], "2022-07-08", n[0], "")
    item[13] = new Array(thisgb("生理", "考古古"), n[30], n[31], "2022-07-15", n[32], "")
    //改共筆改以上這段
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
    alert_name_ss = new Array() //寫手名單
    alert_name_sg = new Array() //審稿名單
    alert_name_sg_today = new Array() //今日審稿名單
    alert_name_kg = new Array() //考古名單
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
            $td.text(gb[day_0[i]][j]).css('color', 'red').appendTo(n_layer_id_num) //賦予元素值，加到層之中
            //加紅標css({property1: value1, property2: value2)          
        }

        n_layer_id += 1
        //alert當寫手
        if (gb[day_0[i]][2] !== n[0] && jQuery.inArray(gb[day_0[i]][1], alert_name_ss) == -1) {
            alert_name_ss.push(gb[day_0[i]][1])
        }
        if (gb[day_0[i]][2] !== n[0] && jQuery.inArray(gb[day_0[i]][2], alert_name_ss) == -1) {
            alert_name_ss.push(gb[day_0[i]][2])
        }
        //alert審稿today
        if (gb[day_0[i]][2] !== n[0] && jQuery.inArray(gb[day_0[i]][4], alert_name_sg_today) == -1) {
            alert_name_sg_today.push(gb[day_0[i]][4])
        }
        //alert交審稿
        if (gb[day_0[i]][4] !== n[0] && jQuery.inArray(gb[day_0[i]][4], alert_name_sg) == -1) {
            alert_name_sg.push(gb[day_0[i]][4])
        }
        //alert考古
        if (gb[day_0[i]][2] == n[0] && jQuery.inArray(gb[day_0[i]][1], alert_name_kg) == -1) {
            alert_name_kg.push(gb[day_0[i]][1])
        }

    }
    //alert那些人
    
    
    alert(alert_name_f(alert_name_ss, "當寫手") + "\n" + alert_name_f(alert_name_sg_today, "當審稿")+ "\n\n" + alert_name_f(alert_name_sg, "交審稿")+ "\n" + alert_name_f(alert_name_kg, "交考古"))
        
   
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
    n_layer_id_tillnow = n_layer_id //等等後來的n_layer_id會重置
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
    
    //做顯示全部
    //item.sort((a, b) => a[3] - b[3])
    //gb.sort((a, b) => a[5] - b[5])
    $('#loadAll').on('click', () => {
        if ($('#loadAll').is(':checked') == true) {
            for (i=n_layer_id_tillnow; i<=n_item; i++) { //再按一次鍵後清空所有數字(id=n_layer_id_tillnow~n_time)的<tr>
                if (document.getElementById(i) !== null) {
                    //alert(document.getElementById(i))
                    document.getElementById(i).remove("#"+toString(i))
                }
            }

            n_layer_id = n_layer_id_tillnow //n_layer_id重置
            item.sort((a, b) => a[3] - b[3]) //先去sort寫手日，我不知道為啥item.sort可以但gb.sort卻不行
            for (i=0; i<n_item; i++) {
                if (gb[i][3] > 0) {
                    getTr(n_layer_id, 'print_gb') //創層
                    for (j=0; j<6; j++) { 
                        let $td = $('<td>') //創造元素
                        n_layer_id_num = $('#' + n_layer_id)
                        $td.text(gb[i][j]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
                    }
                    n_layer_id += 1
                }
            }
        }
        else {
            for (i=n_layer_id_tillnow; i<=n_item; i++) { //再按一次鍵後清空所有數字(id=n_layer_id_tillnow~n_time)的<tr>
                if (document.getElementById(i) !== null) {
                    //alert(document.getElementById(i))
                    document.getElementById(i).remove("#"+toString(i))
                }
            }

            n_layer_id = n_layer_id_tillnow //n_layer_id重置
            item.sort((a, b) => a[3] - b[3]) //先去sort寫手日，我不知道為啥item.sort可以但gb.sort卻不行
            for (i=0; i<n_item; i++) {
                if (gb[i][3] > 0 && gb[i][3] < 7) {
                    getTr(n_layer_id, 'print_gb') //創層
                    for (j=0; j<6; j++) { 
                        let $td = $('<td>') //創造元素
                        n_layer_id_num = $('#' + n_layer_id)
                        $td.text(gb[i][j]).appendTo(n_layer_id_num) //賦予元素值，加到層之中     
                    }
                    n_layer_id += 1
                }
            }
        }
    })
    
    
})

function test() {
    $.ajax({URL:"../password.php", success:function(result){ //call url中的funcion
        $("div").text(result);
        $("#submit").remove();
        }
    })
}


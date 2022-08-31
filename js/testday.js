var n_test = 0;
function count_item_testday (x) {
    n_test += 1;
    return x;
}
function getTr(id, parentId) {
    const tr = document.createElement('tr'); //創建新的層的DOM節點
    tr.setAttribute('id', id); //賦予層元素id
    const past = document.getElementById(parentId);
    past.appendChild(tr); //從table的t_body下append節點到parentTd元素上
}
$(() => {
    item_testday = document.createElement('item_testday') //開一個DOM節點
    item_testday = new Array()
    //改共筆改以下這段
    item_testday[0] = new Array(count_item_testday("口解"), "期末", "2022-12-23", "") //(考科, 範圍, 日期, 剩餘日)
    item_testday[1] = new Array(count_item_testday("口胚"), "期中", "2022-10-28", "")
    item_testday[2] = new Array(count_item_testday("口胚"), "期末", "2022-12-23", "")
    item_testday[3] = new Array(count_item_testday("胚胎"), "期末", "2022-12-20", "")
    item_testday[4] = new Array(count_item_testday("大體"), "期中", "2022-10-12", "")
    item_testday[5] = new Array(count_item_testday("大體"), "期末", "2022-12-20", "")
    item_testday[6] = new Array(count_item_testday("組織"), "Quiz 1", "2022-10-11", "")
    item_testday[7] = new Array(count_item_testday("組織"), "期中", "2022-10-17", "")
    item_testday[8] = new Array(count_item_testday("組織"), "Quiz 2", "2022-12-05", "")
    item_testday[9] = new Array(count_item_testday("組織"), "期末", "2022-12-19", "")
    item_testday[10] = new Array(count_item_testday("OD"), "期中", "2022-10-26", "")
    item_testday[11] = new Array(count_item_testday("OD"), "期末", "2022-12-21", "")
    //改共筆改以上這段

    for (i=0; i<n_test; i++) { //剩餘日計算
        dateSplit = item_testday[i][2].split(/[^\d]/)
        dateParse = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2], 0, 0, 1) //做期限日秒數轉換
        d = new Date()
        d = d.getTime() //當下毫秒
        dataParse = dateParse.getTime()
        count_d = (dateParse - d ) / (1000 * 60 * 60 * 24) //毫秒換秒
        count_d = Math.ceil(count_d) //剩餘日數(無條件進位)
        item_testday[i][3] = count_d
    }
    testday_layer_id = 1
    item_testday.sort((a, b) => a[3] - b[3])
    for (i=0; i<n_test; i++) {
        getTr(testday_layer_id, 'print_testday')
        for (j=0; j<4; j++) { 
            let $td = $('<td>') //創造元素
            testday_layer_id_num = $('#' + testday_layer_id)
            if (item_testday[i][3] < 0) {
                item_testday[i][3] = "已過"
                $td.text(item_testday[i][j]).appendTo(testday_layer_id_num) //賦予元素值，加到層之中
            } else if (item_testday[i][3] <= 14) {
                $td.text(item_testday[i][j]).css('color', 'red').appendTo(testday_layer_id_num) //賦予元素值，加到層之中
                //加紅標css({property1: value1, property2: value2)
            } else {
                $td.text(item_testday[i][j]).appendTo(testday_layer_id_num) //賦予元素值，加到層之中
            }       
        }
        testday_layer_id += 1
    }

})

function onChange(x) { //切換mode
    if (x.value == "_testday") {
        document.getElementById("data_gb").style.display = 'none';
        document.getElementById("output_gb").style.display = 'none';
        document.getElementById("data_testday").style.display = 'block';
        document.getElementById("output_testday").style.display = 'block';
    }
    if (x.value == "_gb") {
        document.getElementById("data_testday").style.display = 'none';
        document.getElementById("output_testday").style.display = 'none';
        document.getElementById("data_gb").style.display = 'block';
        document.getElementById("output_gb").style.display = 'block';
    }
}
function onClick_countdown() {
    if (document.getElementById("checkbox_countdown").checked) { //"近期"鍵打勾
        document.getElementById("output_gb_countdown").style.display = 'block';
    } else {
        document.getElementById("output_gb_countdown").style.display = 'none';
    }
}
function onClick_all() {
    if (document.getElementById("checkbox_all").checked) { //"篩選"鍵打勾
        document.getElementById("output_gb_all").style.display = 'block';
    } else {
        document.getElementById("output_gb_all").style.display = 'none';
    }
}
function getDiv(mode, parentId, id) {
    const div = document.createElement('div') //創建新的層的DOM節點
    div.setAttribute('id', mode+id) //賦予層元素id
    const past = document.getElementById(parentId) 
    past.appendChild(div) //從table的t_body下append節點到parentTd元素上
}
function toNumber(x) {
    x = parseInt(x) + 1; 
    return x;
}
$(() => {
    //$('#button_name').on('change', () => {
        //if ($('#button_name').val() == "_countdown") {
            //alert(3)
        //}
    //})
    $().keypress(function(e) { //按enter鍵也觸發#enter_name的onclick()事件
        key = window.event ? e.keyCode : e.which
        if (key == 13) {
            if ($('#button_name').val() == "_gb") {
                $('#gb_next').trigger("click")
            }
            if ($('#button_name').val() == "_testday") {
                $('#testday_next').trigger("click")
            }
        }
    })
    code_gb_id = 0
    $('#gb_next').on('click', () => {
        //item[流水號] = new Array(共筆名, 寫手1, 寫手2, 上課日, 交初稿日, 審稿日, 審稿日)
        //item[0] = new Array(thisgb("生理", "1"), n[19], n[23], "2022-09-05", "", n[17], "")
        //item[13] = new Array(thisgb("生理", "期中"), n[27], n[0], "x", "2022-10-10", n[0], "x")
        getDiv("countdown", "output_gb_countdown", code_gb_id) //創造近期每一項的div
        if ($('#data_gb_ss_2').val() == "x") {
            code_countdown = "item[" + $('#data_gb_number').val() + "] = new Array(thisgb(\"" + $('#data_gb_name').val() + "\", \"" + $('#data_gb_week').val() + "\"), n[" + $('#data_gb_ss_1').val() + "], n[0], \"x\", \"" + $('#data_gb_date').val() + "\", n[" + $('#data_gb_sg').val() + "], \"x\")"
        } else {
            code_countdown = "item[" + $('#data_gb_number').val() + "] = new Array(thisgb(\"" + $('#data_gb_name').val() + "\", \"" + $('#data_gb_week').val() + "\"), n[" + $('#data_gb_ss_1').val() + "], n[" + $('#data_gb_ss_2').val() + "], \"" + $('#data_gb_date').val() + "\", \"\", n[" + $('#data_gb_sg').val() + "], \"\")"       
        }
        countdownId = "#countdown" + code_gb_id //近期的每一項id
        $(countdownId).text(code_countdown)

        //<!--item_all[流水號] = new Array(共筆名, 寫手1, 寫手2, 上課日, 交初稿日, 審稿日, 審稿日)-->
        getDiv("all", "output_gb_all", code_gb_id) //創造篩選每一項的div
        if ($('#data_gb_ss_2').val() == "x") {
            code_all = "item_all[" + $('#data_gb_number').val() + "] = new Array(thisgb(\"" + $('#data_gb_name').val() + "\", \"" + $('#data_gb_week').val() + "\"), n[" + $('#data_gb_ss_1').val() + "], n[0], \"x\", \"" + $('#data_gb_date').val() + "\", n[" + $('#data_gb_sg').val() + "], \"x\")"
        } else {
            code_all = "item_all[" + $('#data_gb_number').val() + "] = new Array(thisgb(\"" + $('#data_gb_name').val() + "\", \"" + $('#data_gb_week').val() + "\"), n[" + $('#data_gb_ss_1').val() + "], n[" + $('#data_gb_ss_2').val() + "], \"" + $('#data_gb_date').val() + "\", \"\", n[" + $('#data_gb_sg').val() + "], \"\")"       
        }
        allId = "#all" + code_gb_id //篩選的每一項id
        $(allId).text(code_all)

        code_gb_id += 1
        if ($.isNumeric($('#data_gb_week').val())) { //周次如果是數字則每次都+1
            num_week = $('#data_gb_week').val()
            num_week = toNumber(num_week)
            $('#data_gb_week').val(num_week)
        }
        $('#data_gb_number').val(code_gb_id) //流水號+1
        $('#data_gb_ss_1').val("") //共筆人重設
        $('#data_gb_ss_2').val("") //共筆人重設
        $('#data_gb_sg').val("") //審稿人重設
        $('#data_gb_date').val("") //日期重設
    })

    $('#gb_back').on('click', () => {
        countdownId = "#countdown" + code_gb_id
        allId = "#all" + code_gb_id
        
    })
})
function onChange(x) { //切換mode
    if (x.value == "_testday") {
        document.getElementById("data_gb").style.display = 'none';
        document.getElementById("output_gb").style.display = 'none';
        document.getElementById("data_testday").style.display = 'block';
        document.getElementById("output_testday_out").style.display = 'block';
    }
    if (x.value == "_gb") {
        document.getElementById("data_testday").style.display = 'none';
        document.getElementById("output_testday_out").style.display = 'none';
        document.getElementById("data_gb").style.display = 'block';
        document.getElementById("output_gb").style.display = 'block';
    }
}
function onClick_countdown() {
    if (document.getElementById("checkbox_countdown").checked) { //"近期"鍵打勾
        document.getElementById("output_gb_countdown").style.display = 'block';
        if (document.getElementById("output_gb_countdown").innerHTML !== "") {
            document.getElementById("rep_countdown").style.display = 'block'; //有東西才有複製鍵
        }
    } else {
        document.getElementById("output_gb_countdown").style.display = 'none';
        document.getElementById("rep_countdown").style.display = 'none';

    }
}
function onClick_all() {
    if (document.getElementById("checkbox_all").checked) { //"篩選"鍵打勾
        document.getElementById("output_gb_all").style.display = 'block';
        if (document.getElementById("output_gb_all").innerHTML !== "") {
            document.getElementById("rep_all").style.display = 'block'; //有東西才有複製鍵
        }
    } else {
        document.getElementById("output_gb_all").style.display = 'none';
        document.getElementById("rep_all").style.display = 'none';
    }
}
function getDiv(mode, parentId, id) {
    const div = document.createElement('div') //創建新的層的DOM節點
    div.setAttribute('id', mode+id) //賦予層元素id
    const past = document.getElementById(parentId) 
    past.appendChild(div) //從table的t_body下append節點到parentTd元素上
}
function toNumber(x, y) {
    x = parseInt(x) + y; 
    return x;
}
document.getElementById("rep_countdown").addEventListener('click', function(){
    var copyArea = document.getElementById("output_gb_countdown");
    var range = document.createRange(); 
    range.selectNode(copyArea); //選取範圍
    window.getSelection().addRange(range);
    document.execCommand('copy'); //copy
    window.getSelection().removeAllRanges(); //取消選取
    var $rep = document.getElementById("rep_countdown")
    $($rep).text("已複製");
    $rep.style.background = 'orange';
    $rep.style.color = 'green'; 
    setTimeout(() => {
        $($rep).text("一鍵複製");
        $rep.style.background = 'white';
        $rep.style.color = 'grey';
    }, "2000")
    //document.getElementById("rep_countdown").style.display = 'none'; //暫時隱藏按鍵，除非有下一個動作
})
document.getElementById("rep_all").addEventListener('click', function(){
    var copyArea = document.getElementById("output_gb_all");
    var range = document.createRange(); 
    range.selectNode(copyArea); //選取範圍
    window.getSelection().addRange(range);
    document.execCommand('copy'); //copy
    window.getSelection().removeAllRanges(); //取消選取
    var $rep = document.getElementById("rep_all")
    $($rep).text("已複製");
    $rep.style.background = 'orange';
    $rep.style.color = 'green';
    setTimeout(() => {
        $($rep).text("一鍵複製");
        $rep.style.background = 'white';
        $rep.style.color = 'grey';
    }, "2000")
    //document.getElementById("rep_all").style.display = 'none'; //暫時隱藏按鍵，除非有下一個動作
})
document.getElementById("rep_testday").addEventListener('click', function(){
    var copyArea = document.getElementById("output_testday");
    var range = document.createRange(); 
    range.selectNode(copyArea); //選取範圍
    window.getSelection().addRange(range);
    document.execCommand('copy'); //copy
    window.getSelection().removeAllRanges(); //取消選取
    var $rep = document.getElementById("rep_testday")
    $($rep).text("已複製");
    $rep.style.background = 'orange';
    $rep.style.color = 'green';
    setTimeout(() => {
        $($rep).text("一鍵複製");
        $rep.style.background = 'white';
        $rep.style.color = 'grey';
    }, "2000")
    //document.getElementById("rep_testday").style.display = 'none'; //暫時隱藏按鍵，除非有下一個動作
})
for (i=0; i<3; i++) {
    document.getElementsByClassName("next")[i].addEventListener('keyup', function (e) { //按鍵時偵測字串長度
        var target = e.srcElement || e.target;
        var maxLength = parseInt(target.attributes["maxlength"].value, 10);
        var thisLength = target.value.length;
        if ($.isNumeric(target)) {
            if (target.value > 3 || thisLength >= maxLength) { //如果號碼是4-9號或是兩位數號碼，跳下一欄
                var next = target;
                while (next = next.nextElementSibling) {
                    next.focus();
                    break;
                }
            }
        } else {
            if (target.value == "x" || thisLength >= maxLength) { //考古人如果輸入x，跳下一欄
                var next = target;
                while (next = next.nextElementSibling) {
                    next.focus();
                    break;
                }
            }
        }
        
    })
}
for (i=0; i<100; i++) {
    if (document.getElementsByClassName("right")[i]) {
        document.getElementsByClassName("right")[i].addEventListener('keydown', function (e) {
            if (e.keyCode == '39' || e.keyCode == '40') { //右鍵
                var target = e.srcElement || e.target;
                target.nextElementSibling.focus(); //移到下一格
            }
            if (e.keyCode == '37' || e.keyCode == '38') { //左鍵
                var target = e.srcElement || e.target;
                target.previousElementSibling.focus(); //移到上一格
            }
        })
    }
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
    $('#gb_next').on('click', () => {
        if (document.getElementById("checkbox_countdown").checked) {
            $('#rep_countdown').css('display', 'block') //有東西才有複製鍵
        }
        if (document.getElementById("checkbox_all").checked) {
            $('#rep_all').css('display', 'block') //有東西才有複製鍵
        }
        code_gb_id = toNumber($('#data_gb_number').val(), 0)
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
            num_week = toNumber(num_week, 1)
            $('#data_gb_week').val(num_week)
        }
        $('#data_gb_number').val(code_gb_id) //流水號+1
        $('#data_gb_ss_1').val("") //共筆人重設
        $('#data_gb_ss_2').val("") //共筆人重設
        $('#data_gb_sg').val("") //審稿人重設
        $('#data_gb_date').val("") //日期重設
    })

    $('#gb_back').on('click', () => {
        if (code_gb_id > 0) {
            $('#rep_countdown').css('display', 'block')
            $('#rep_all').css('display', 'block')
            code_gb_id -= 1 //流水號-1
            //countdownId = "#countdown" + code_gb_id
            //allId = "#all" + code_gb_id
            document.getElementById("countdown" + code_gb_id).remove()
            document.getElementById("all" + code_gb_id).remove()
            $('#data_gb_number').val(code_gb_id)
            if ($.isNumeric($('#data_gb_week').val()) && $('#data_gb_week').val() > 1) { //周次如果是數字則-1
                num_week = $('#data_gb_week').val()
                num_week = toNumber(num_week, -1)
                $('#data_gb_week').val(num_week)
            }
            $('#data_gb_ss_1').val("") //共筆人重設
            $('#data_gb_ss_2').val("") //共筆人重設
            $('#data_gb_sg').val("") //審稿人重設
            $('#data_gb_date').val("") //日期重設
        }
        if (code_gb_id == 0) {
            $('#rep_countdown').css('display', 'none')
            $('#rep_all').css('display', 'none')
        }
    })
    $('#gb_delete').on('click', () => {
        while (code_gb_id > 0) {
            code_gb_id -= 1 //流水號-1
            if(document.getElementById("countdown" + code_gb_id) !== null) {
                document.getElementById("countdown" + code_gb_id).remove()
                document.getElementById("all" + code_gb_id).remove()
                $('#data_gb_week').val("")
                $('#data_gb_ss_1').val("") //共筆人重設
                $('#data_gb_ss_2').val("") //共筆人重設
                $('#data_gb_sg').val("") //審稿人重設
                $('#data_gb_date').val("") //日期重設
            }           
        }
        $('#data_gb_number').val("0")
        $('#rep_countdown').css('display', 'none')
        $('#rep_all').css('display', 'none')
    })

    $('#testday_next').on('click', () => {
        $('#rep_testday').css('display', 'block')
        code_testday_id = toNumber($('#data_testday_number').val(), 0)
        //item_testday[流水號] = new Array(考科, 範圍, 日期, 剩餘日)
        //item_testday[0] = new Array(count_item_testday("OD"), "期中", "2022-07-03", "")
        getDiv("testday", "output_testday", code_testday_id) //創造考程每一項的div
        code_testday = "item_testday[" + $('#data_testday_number').val() + "] = new Array(count_item_testday(\"" + $('#data_testday_name').val() + "\"), \"" + $('#data_testday_range').val() + "\", \"" + $('#data_testday_date').val() + "\", \"\")"
        testdayId = "#testday" + code_testday_id //考程的每一項id
        $(testdayId).text(code_testday)

        code_testday_id += 1
        $('#data_testday_number').val(code_testday_id) //流水號+1
        $('#data_testday_range').val("") //範圍重設
        $('#data_testday_date').val("") //日期重設
    })

    $('#testday_back').on('click', () => {
        if (code_testday_id > 0) {
            $('#rep_testday').css('display', 'block')
            code_testday_id -= 1 //流水號-1]
            document.getElementById("testday" + code_testday_id).remove()
            $('#data_testday_number').val(code_testday_id)
            $('#data_testday_range').val("") //範圍重設
            $('#data_testday_date').val("") //日期重設
        }
        if (code_testday_id == 0) {
            $('#rep_testday').css('display', 'none')
        }
    })
    $('#testday_delete').on('click', () => {
        while (code_testday_id > 0) {
            code_testday_id -= 1 //流水號-1]
            if (document.getElementById("testday" + code_testday_id) !== null) {
                document.getElementById("testday" + code_testday_id).remove()
                $('#data_testday_name').val("") //考科重設
                $('#data_testday_range').val("") //範圍重設
                $('#data_testday_date').val("") //日期重設
            } 
        }
        $('#data_testday_number').val("0")
        $('#rep_testday').css('display', 'none')
    })
})

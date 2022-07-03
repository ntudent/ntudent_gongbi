<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown</title>
    <script>//臺大牙醫系B09蔡侁甫所有網站</script>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body style="background: #00ffcc; font-family: 'Times New Roman', Helvetica, 新細明體;">
    
    <div id="head_countdown"></div>
    <div id="body_countdown">
        <table class="div" id="print_today" border="1">
            <div>今日待做</div>
            <thead>
                <tr id="t_head_1">
                    <th>共筆名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th>寫手1&nbsp;&nbsp;&nbsp;</th>
                    <th>寫手2&nbsp;&nbsp;&nbsp;</th>
                    <th>剩餘日&nbsp;&nbsp;</th>
                    <th>審稿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th>剩餘日&nbsp;&nbsp;</th>
                </tr>
            </thead>
        
        </table>
        <table class="div" id="print_sg" border="1">
            <div>未來一周審稿交件</div>
            <thead>
                <tr id="t_head_2">
                    <th>共筆名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th>寫手1&nbsp;&nbsp;&nbsp;</th>
                    <th>寫手2&nbsp;&nbsp;&nbsp;</th>
                    <th>剩餘日&nbsp;&nbsp;</th>
                    <th>審稿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th>剩餘日&nbsp;&nbsp;</th>
                </tr>
            </thead>
        
        </table>
        <table class="div" id="print_gb" border="1">
            <div>未來一周共筆/考古</div>
            <thead>
                <tr id="t_head_3">
                    <th>共筆名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th>寫手1&nbsp;&nbsp;&nbsp;</th>
                    <th>寫手2&nbsp;&nbsp;&nbsp;</th>
                    <th>剩餘日&nbsp;&nbsp;</th>
                    <th>審稿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th>剩餘日&nbsp;&nbsp;</th>
                </tr>
            </thead>
        
        </table>
    </div>

    <button id="aaa"></button>
    <div onload="" id="div"> 
        <span onclick="getData('https://ntudent.github.io/index.html');" id="news">熱門</span>
    </div>

    <script type="text/javascript">
        
    </script>

    <script src="./jquery-3.6.0.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
    <script src="./js/gb.js"></script>
    <script src="./js/index.js"></script>
</html>

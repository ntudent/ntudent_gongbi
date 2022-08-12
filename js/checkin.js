function thisrefresh() {
    window.location.reload();
}
setTimeout('thisrefresh()', 10000); //自動刷新頁面
function getmonth() {
    var d = new Date()
    var month = d.prototype.getMonth();
    var i = 0;
    if (i <= month) {
        setTimeout(() => {
            document.getElementById("month_num").text(i+1);
        }, 1000*i)
    }
    month_en(i);
}
function month_en(i) {
    switch (i) {
        case 0 : 
            var text = "January";
            break;
        case 1 :
            var text = "Febuary";
            break;
        case 7 :
            var text = "August";
            break; 
    }
    document.getElementById("month_en").text(text);
}
$(() => {
    d = new Date()

})

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
            var docu = document.getElementById("month_num")
            $(docu).text(i+1);
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
        case 2 :
            var text = "March";
            break;
        case 3 :
            var text = "April";
            break;
        case 4 :
            var text = "May";
            break;
        case 5 :
            var text = "June";
            break;
        case 6 :
            var text = "July";
            break;
        case 7 :
            var text = "August";
            break;
        case 8 :
            var text = "September";
            break;
        case 9 :
            var text = "October";
            break;
        case 10 :
            var text = "November";
            break;
        case 11 :
            var text = "December";
            break;
    }
    var docu = document.getElementById("month_en")
    $(docu).text(text);
}
$(() => {
    d = new Date()

})

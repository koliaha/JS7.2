var zag = document.querySelector('.zag');
var timerId = setInterval(func, 1000);
function func (){
    let now = new Date(),
        h = now.getHours().toString();
        m = now.getMinutes().toString();
        s = now.getSeconds().toString();
        if (h.length == 1) {
            h = 0 + h;
        }
        if (m.length == 1) {
            m = 0 + m;
        }
        if (s.length == 1) {
            s = 0 + s;
        }
    zag.textContent = h + " : " + m + " : " + s;
    console.log(s);
}

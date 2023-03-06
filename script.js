setInterval(()=>{
    const date = new Date();
    const hrs = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()

    const hrsEle = document.getElementById('hrs')
    const minEle = document.getElementById('min')
    const secEle = document.getElementById('sec')
    const secAm = document.getElementById('am')

    hrsEle.textContent = (hrs.toString()).padStart(2,"0");
    minEle.textContent = (min.toString()).padStart(2,"0");;
    secEle.textContent = (sec.toString()).padStart(2,"0");;

    if (hrs >= 12) {
        secAm.textContent = "PM";
    }



},1000)
let calcScrollValue = () =>{
    let scrollprogress = document.getElementById("go-top-btn");
    let progessValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);

    if(pos > 100){
      scrollprogress.style.display ="grid";
    }
    else{
      scrollprogress.style.display = "none";
    }
    scrollprogress.addEventListener("click",() =>{
      document.documentElement.scrollTop = 0;
    });
    // scrollprogress.style.background = `conic-gradient (#03cc65 ${scrollValue}% , #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
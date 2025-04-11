const hrs=document.querySelector('.hrs');
const min=document.querySelector('.min');
const sec=document.querySelector('.sec');
const ms=document.querySelector('.ms');

const btnStart=document.querySelector('.btnStart');
const btnStop=document.querySelector('.btnStop');
const btnReset=document.querySelector('.btnReset');

let h1=m1=s1=ms1=0,startTimer=0;

btnStart.addEventListener('click',()=>{
    startTimer=setInterval(()=>{
        ms1++;
        if(ms1==100){
            s1++;
            ms1=0;
        }
        if(s1==60){
            m1++;
            s1=0;
        }
        if(m1==60){
            h1++;
            m1=0;
        }
        display();
    },10);
    btnStart.classList.add('btnStart-active');
    btnStop.classList.remove('btnStop-active');
})

btnStop.addEventListener('click',()=>{
    clearInterval(startTimer);
    btnStart.classList.remove('btnStart-active');
    btnStop.classList.add('btnStop-active');
})

btnReset.addEventListener('click',()=>{
    h1=m1=s1=ms1=0;
    display();
    btnStart.classList.remove('btnStart-active');
    btnStop.classList.remove('btnStop-active');
})

const display=()=>{
    ph1=h1<10?'0'+h1:h1;
    pm1=m1<10?'0'+m1:m1;
    ps1=s1<10?'0'+s1:s1;
    pms1=ms1<10?'0'+ms1:ms1;

    hrs.innerHTML=ph1;
    min.innerHTML=pm1;
    sec.innerHTML=ps1;
    ms.innerHTML=pms1;
}
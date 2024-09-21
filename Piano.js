const listItems = document.querySelectorAll('.key-container .key');
const volumeBtn=document.querySelector('.range-button input');
const showHide=document.querySelector('.piano-enable-btn input');

 
let audio=new Audio();

const playTune=(key)=>{
    audio.src=`./tunes/${key}.wav`
audio.play();
}
listItems.forEach(key=>{
    key.addEventListener("click",()=>playTune(key.dataset.key))
});
const addingVolume=(e)=>{
    audio.volume=e.target.value;
}
const showHideBtn=()=>{
   listItems.forEach(key=>key.classList.toggle("hide"));
}

volumeBtn.addEventListener("input",addingVolume);
showHide.addEventListener("click",showHideBtn);

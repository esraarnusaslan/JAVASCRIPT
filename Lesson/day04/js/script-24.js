


function setMode() {

    const elBody=document.querySelector('body');

    if(elBody.classList.contains("light")){
        elBody.classList.remove("light");
        elBody.classList.add("dark");

    }else{
        elBody.classList.remove("dark");
        elBody.classList.add("light");
    }   


}
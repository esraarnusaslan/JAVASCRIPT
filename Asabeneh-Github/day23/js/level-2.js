//

//! new box shadow add

const pressKey = document.querySelector('.pressKey');
const container = document.querySelector('.container');

let keyDownBoxShadow = (e) => {
    pressKey.style.display = 'none';
    container.innerHTML = `<div> <div class="newBoxShadow"><p>You pressed &nbsp</p> <p class="eKeySpan"> ${e.key}</p></div>
    <div class="eKeyCode"> <p > ${e.keyCode}</p> </div> 
    </div> 
      `;
};

document.body.addEventListener('keydown', (e) => {
    keyDownBoxShadow(e);
});

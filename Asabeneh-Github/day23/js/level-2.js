//

//! new box shadow add

const pressKey = document.querySelector('.pressKey');
const container = document.querySelector('.container');

let keyDownBoxShadow = (e) => {
    pressKey.style.display = 'none';
    const keyName = e.key === ' ' ? 'Space' : e.key;
    container.innerHTML = `<div> <div class="newBoxShadow"><p>You pressed &nbsp</p> <p class="eKeySpan"> ${keyName}</p></div>
    <div class="eKeyCode"> <p > ${e.keyCode}</p> </div> 
    </div> 
      `;
};

document.body.addEventListener('keydown', (e) => {
    keyDownBoxShadow(e);
});

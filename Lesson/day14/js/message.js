const showAlert = (message) => {
    alert(message);
};

export const showConfirm = (message) => {
    return confirm(message);
};

//2.Way
//export{showAlert, showConfirm}
//! NOTE
//bir module de sadece bir tane default olur
export default showAlert;
// js de import ta {} kullanilmaz

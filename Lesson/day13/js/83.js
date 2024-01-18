let counter = localStorage.getItem('visitCounter');
counter ??= 0;
counter++;
localStorage.setItem('visitCounter', counter);

document.getElementById(
    'lblCounter'
).innerHTML = ` You visited this web site for ${counter} times`;

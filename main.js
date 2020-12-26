let inputs = document.querySelectorAll('.input');

let inputChange = (e) => {
    let dataVariable = e.target.getAttribute("data-variable");
    let prefix = (e.target.getAttribute("data-prefix")) ? e.target.getAttribute("data-prefix") : "";
    let value = (dataVariable == "--color") ? e.target.value : (e.target.value/100)+prefix;
    document.documentElement.style.setProperty(dataVariable,value);
};

inputs.forEach(input => {
    input.addEventListener('change',inputChange);
    input.addEventListener('mousemove',inputChange);
});
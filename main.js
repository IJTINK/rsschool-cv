let inputs = document.querySelectorAll('.input');

let inputChange = (e) => {
    let dataVar = e.target.getAttribute("data-var");
    let prefix = (e.target.getAttribute("data-prefix")) ? e.target.getAttribute("data-prefix") : "";
    let value = (dataVar == "--color") ? e.target.value : (e.target.value/100)+prefix;
    document.documentElement.style.setProperty(dataVar,value);
};

inputs.forEach(input => {
    input.addEventListener('change',inputChange);
    input.addEventListener('mousemove',inputChange);
});
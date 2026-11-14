const form =document.getElementById('contact-form');
const nameinput =document.getElementById('unname');
const nameoutput =document.getElementById('form-output');
form.addEventListener('submit',event =>{
event.preventDefault();
const text=nameinput.value;
nameoutput.textContent="你填的是："+text;
console.log("你提交的名字：",text);

})

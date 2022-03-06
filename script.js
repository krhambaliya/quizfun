const one=document.getElementsByClassName('one');
const two=document.getElementsByClassName('two');
const three=document.getElementsByClassName('three');
const createdAt=document.getElementsByClassName('createdAt')[0];
createdAt.innerHTML+=new Date();


one[0].addEventListener('click',()=>{
    window.location.href="quiz1.html"
})
two[0].addEventListener('click',()=>{
    window.location.href="quiz2.html"
})
three[0].addEventListener('click',()=>{
    window.location.href="quiz3.html"
})




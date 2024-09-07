// greetings fn

function welcome()
{
    alert("Hi folks! How are you..");
}

//change color
const image=document.querySelector('.profimg');
const leftPane=document.querySelector('.left-pane');

image.addEventListener('mouseover',()=>{
    leftPane.style.backgroundColor='red';
});
image.addEventListener('mouseout',()=>{
    leftPane.style.backgroundColor='#6A9C89'
}
)
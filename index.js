const content = document.querySelector(".content")
const dice = document.querySelector(".dice")
const id = document.querySelector(".num")


const getAdvice = ()=>{
    fetch("https://api.adviceslip.com/advice",
    {cache:"no-cache"})
    .then((response)=>response.json())
    .then((data)=>{
        id.innerHTML = data.slip.id;
        content.innerHTML = '<q>'+data.slip.advice+'</q>'
    });

};  

dice.addEventListener('click',getAdvice)


getAdvice()




const content = document.querySelector(".content")
const dice = document.querySelector(".dice")
const id = document.querySelector(".num")
let slip_id=1

const getAdvice = (slip_id)=>{
    fetch(`https://api.adviceslip.com/advice/${slip_id}`).then(
        function(response){
            if(response.status!==200){
                console.log("something went wrong",response.status)
                return;
            }

            response.json().then(function(data){
                content.innerHTML = '<q>'+data.slip.advice+'</q>'
                id.innerHTML = slip_id
                console.log(data)
            });
        }
    ).catch(function(err){
        console.log("Fetch error",err)
    })
}

dice.addEventListener('click',()=>{
        slip_id+=1
        getAdvice(slip_id)
})

getAdvice(slip_id)





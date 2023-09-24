let startBtn = document.querySelector('#startBtn');
let cityName=document.querySelector(".city-name");
let death =document.querySelector(".death");
let treating = document.querySelector(".treating");

fetch("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST")
    
startBtn.addEventListener("click",(e)=>{
    fetch("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST")
    .then(async result =>{
        
        const data = await result.json();
        console.log(data.detail[0].name)
        console.log(data.detail)

        cityName.innerHTML= `Ten thanh pho: ${data.detail[0].name}`   ;
        death.innerHTML= `Số ca tử vong:${data.detail[0].death}`;
        treating.innerHTML=`Điều trị thành công: ${data.detail[0].treating}`
    }

    )
})
    
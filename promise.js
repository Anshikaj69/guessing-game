async function birthday(kayo){
 const cake = await new Promise((resolve,reject)=>{
    
     setTimeout(()=>{
      if(kayo=='healthy'){resolve("here is cake , Happpy")}
      else{reject("no cake , sad")}
     },2000)
 })

 return cake
}

birthday('sick')
.then((order)=>console.log(order))
.catch((error)=>{console.log(error)})
.finally( console.log("partyyyyyyy!"))
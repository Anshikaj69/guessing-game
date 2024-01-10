const guess=(num)=>{
    const promise = new Promise((resolve, reject)=>{
    const random =(Math.random()*6+1)
    const score=0;
    if(num==random){
       score+=2
       guess()
    }
    else if ((num+1)==random){
        score+=1
    }
    })
    resolve(score)
    return promise
guess().then(resolve, reject)

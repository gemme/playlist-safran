const error = false;
const myPromise1 = new Promise((success, failure) => {
    setTimeout(() => {
        if(!error){
            success({
                name: 'Seek and destroy',
                artist: 'Metallica'
           })
        } else{
            failure({
                message: 'Data not found'
            });
        }
}, 3000);
})
const myPromise2 = new Promise((success, failure) => {
    setTimeout(() => {
        if(!error){
            success({
                name: 'Seek and destroy',
                artist: 'Metallica'
           })
        } else{
            failure({
                message: 'Data not found'
            });
        }
}, 3000);
})

Promise.all([myPromise1, myPromise2]).then(function(values) {
    console.log(values);
  });


/* myPromise
    .then(success => console.log(success))
    .catch(error => console.log(error)) */

/* const callMyPromise = async () => {
    try{
        const myResponse1 = await myPromise1;
        console.log(myResponse1);
        console.log('until myPromise1 is resolved');
        const myResponse2 = await myPromise2;
        console.log(myResponse2);
    } catch(error){
        console.log(error);
    }
}
callMyPromise(); */
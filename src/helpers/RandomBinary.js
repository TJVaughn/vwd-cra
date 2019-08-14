function randomBinaryNumber() {

    for(let i = 0; i < 100000; i++){
        i = Math.random();
        if (i >= 0.5){
            setTimeout(
            console.log(1)
                , 500)
            
        } else {
            setTimeout(
                console.log(0)
                    , 500)
        }
    }
}
export { randomBinaryNumber };
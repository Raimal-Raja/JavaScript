let vowelCount = (str) => {
    let count = 0
    for(const char of str){
        if(char === 'a'|| char === 'e'|| char ==='i' || char ==='o'|| char === 'o'){
            count++
        }
    }
    console.log(count)
}
vowelCount('Hello')
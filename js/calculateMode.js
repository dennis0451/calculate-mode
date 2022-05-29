const calculateMode = (array) => {
    //create object to find mode
    let numObj = {}
    for(let i = 0; i < array.length ; i ++){
        if(numObj.hasOwnProperty(array[i])){
            numObj[array[i]]++
        }else{
            numObj[array[i]] = 1
        }
    }
    //convert object to array
    let numArray = Object.entries(numObj)
    numArray.sort(function (a,b){return b[1]-a[1]})
    //manipulate array to remove mode
    let finalArr = [parseFloat(numArray[0][0])]
    for(let j = 1; j < numArray.length; j++){
        if(numArray[0][1] === numArray[j][1]){
            finalArr.push(parseFloat(numArray[j][0]))
        }    
    }
    //sort mode in ascending order
    if(finalArr.length > 1){
        finalArr.sort(function (a,b){return a-b})
        return finalArr
    }else{
        return finalArr
    }
}

console.log(calculateMode([1.5, -1, 1, 1.5]))
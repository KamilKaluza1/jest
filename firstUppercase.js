const functions = {
    one: (str) => {
        return str.toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
        
    },
    
    two: (str) => {
        
        const array = str.toLowerCase().split(' ')

        for(let i = 0 ; i < array.length ; i ++ ){
            array[i] = array[i].substring(0,1).toUpperCase() + array[i].substring(1)
        }
        return array.join(' ')
    }
} 

module.exports = functions
//Bai 3
function transform(numbers, callback) {
    var result = [];
    numbers.forEach(function(item,index,array){
        result[index] =callback(item);
    });
    return result;
}

function double(num) {
    return num*2;
}
numbers = [1,2,3,4];
console.log(transform(numbers,double));
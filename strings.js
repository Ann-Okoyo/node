let b = "beautiful";
console.log(b[0],b[2],b[3],b[4]);
String.prototype.insert = function(index, string){

    if (index > 0)
    {
        return food.substring(0,index) + string + food.substring(index, food.length);
    }
    return string + food
}
var food = "I was feeling hungry today";
food = food.insert(5," eat");
console.log([food]);


const story = "the quick brown fox jumps over the lazy dog";
let count = (story.match(/the/r) || []).length;
console.log("count",count);
let tell = (story.match(/fox/r) || []).length;



console.log("tell",tell);
const string1 = "We are now going to school";
const word = "now";
console.log(`The word "${word}" ${string1.includes(word)? "is" : "is not"} in the sentence`);


const string2 = "The child was sitting on the table before it fell";
const text = "sitting";
console.log(`The word "${text}" ${string2.includes(text)? "is" : "is not"} in the sentence`);




const string3 = "wonderful";
console.log(string3.toUpperCase());












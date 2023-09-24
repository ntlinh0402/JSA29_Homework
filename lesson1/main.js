let text = '';
for(let i=0; i<10; i++){
    text += 'This is number' + i +'<br>';
    
}
document.getElementById("demo").innerHTML = text;


var newArray = [
    'JS',
    'python',
    'C++'
]
console.log(newArray.join(' - '));
console.log(newArray.toString());
console.log(newArray.push('html'));
console.log(newArray.pop())




//HOMEWORK
//ex1
var fruitStorage = ['Grape', 15];
var fruitQuantity = fruitStorage[1];
var fruitName = fruitStorage[0];
console.log('I have' + ' ' + fruitQuantity + ' ' + fruitName );



//ex2

var textFruit
for (let i = 0; i < 1; i++) {
  
  console.log("The fruit is " + fruitName);
  if(fruitQuantity==1){
    console.log("There are " + fruitQuantity + ' ' + fruitName)
  }
  else{
    console.log("There are " + fruitQuantity + ' ' + fruitName + 's')
  }

}
//ex2
var myDog={
    'name':'Ngáo',
    'legs': 4,
    'friends': ["Everything!"]
}
myDog.name = 'Husky';
 console.log(myDog);
myDog.color = 'Brown';
console.log(myDog);
delete myDog.friends;
console.log(myDog);



function joinWithCharacter(array, charactor) {
  return array.join(charactor)
}


let fruit:Array<string>=["apple","banana","orange","kiwi"];
fruit.push("mango");
// apple banana orange kiwi mango mango

fruit.pop();//banana orange kiwi

fruit.toString();

fruit.sort();//sort in alphabetical order
//apple banana kiwi orange

fruit[0].concat("papaya","grape");//add at end
//apple banana  orange  kiwi papaya grape

fruit.shift();
//banana orange kiwi papaya grape

fruit.unshift("apple");
//apple,banana,orange,kiwi,papaya,grape

fruit.join(' ');
//join an array
//apple banana  orange  kiwi papaya grape
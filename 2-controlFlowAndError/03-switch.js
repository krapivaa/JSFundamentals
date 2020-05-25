/*
SWITCH STATEMENTS
*/

let friend = 'Tom';

switch(friend){
    case 'Tom':
     console.log('Hey Tom, when will you bring sourdough bread for me?');
     break;
    case 'Kenn':
     console.log('Hey Kenn, do youown a wolf in your backyard?');
     break;
    case 'Alex':
     console.log('Hey Alex, how many Magic cards do you own?');
     break;
    default:
      console.log(`I am sorry, ${friend}, bt do I know you?`);
}


let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean') {
    case true:
        console.log('yep is a string or boolean');
        break;
        default:
            console.log('yep is not a string or a number');
}

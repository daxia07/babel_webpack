// const num = require('./test');
import _ from 'lodash';

let words = ['sky', 'wood', 'forest', 'falcon',
  'pear', 'ocean', 'universe'
];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);

class Expense {
  constructor(des, value) {
    this.des = des;
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}

exp = new Expense('jd', 200);
console.log(exp);
console.log(exp.getValue());
console.log('test');
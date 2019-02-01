import {Animal2} from './animal';
import {Bird} from './bird.js';
import {test} from './util';
// import '../node_modules/babel-polyfill/dist/polyfill';
import 'babel-polyfill';

export class Cat extends Animal2 {
  constructor(name) {
    super(name || ' cat');
  }

  eat() {
    console.log(this.name, 'eat', new Bird().name);
    // test();
  }
}
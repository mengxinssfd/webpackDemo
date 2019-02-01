// import {test} from './util';
// import '../node_modules/babel-polyfill/dist/polyfill';
export class Animal2 {
  constructor(name) {
    this.name = name || '';
  }

  jump() {
    console.log(this.name, 'jumping');
    // test();
  }
}

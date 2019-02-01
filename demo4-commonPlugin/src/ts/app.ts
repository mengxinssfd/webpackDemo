declare const System: any;
declare const Promise: any;

import {Animal} from "./animal";
// h
// import {Cat} from "./Cat";
// import {Bird} from "./bird";
// import '@babel/polyfill';
// import {test2} from "../common/utils";
// import {Bird} from "./bird";

// test();
new Animal("dog").jump();
// test2();

async function tsssssssssssssssssss() {
    let {Bird} = await System.import(/* webpackChunkName:"birdTs" */"./bird");
    console.log("888888888888888888");
    let b = new Bird();
    b.jump();
    b.fly();
    return "";
}

async function ts() {
    let {Cat} = await System.import(/* webpackChunkName:"birdTs" */"./cat");
    let cat = new Cat("Tom");
    cat.jump();
    cat.eat();
    return "";
}

function ttbbbbbbbbbbbbbb() {
    let a = "xxxxxxxxxxxx";
    console.log(a);
}

ttbbbbbbbbbbbbbb();
tsssssssssssssssssss();
ts();
console.log("test");


import "../../common/style/base.less";
import "./index.less";
import {test} from "../../common/ts/util";

declare const XMLHttpRequest: any;

window.onload = function () {
    let a = 'ggggggggggg';
    console.log(a);
    test();
    console.log("test test test");
    let responText = '';
    let url = 'comments/hotflow?id=4338853499653779&mid=4338853499653779&max_id_type=0';
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            responText = xhr.responseText;
            console.log("ssss", responText);
        }
    };
    xhr.open('get', url, true);
    xhr.send();
};
declare const window: any;
import "../../common/style/base.less";
import "./index.less";
import * as $ from "jquery";
import * as _ from "lodash";
import axios from "axios";
import * as el from "element-ui";
import vue from "vue";

window.onload = function () {
    console.log("main mian main");
    console.log($("html"))
    console.log(_.chunk([123, 212, 324, 435], 2))
    console.log("jquery", $);
    console.log("lodash", _);
    console.log("axios", axios);
    console.log("element ui", el);
    console.log("vue", vue);
}
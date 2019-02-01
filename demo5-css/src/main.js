import base from './css/base.css';
import common from './css/common.css';
import './css/test.less';
import './css/test.sass';
import './css/test.scss';
import './css/test.styl';

let app = document.getElementById('app');
app.innerHTML = `<div class='${base.box}'></div>`;

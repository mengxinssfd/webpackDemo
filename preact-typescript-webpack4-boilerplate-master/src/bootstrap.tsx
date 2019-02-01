import { h, render } from 'preact';
import {Test} from "./common/utils";
import { App } from './app/app';

import './styles/app.less';
// new Test();

render(<App title='Preact boilerplate' />, document.getElementById('app'));
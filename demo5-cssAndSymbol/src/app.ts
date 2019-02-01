import './css/base.css';
import './css/common.css';

let body = document.body;

function copy(str: string) {
    let save = function (e) {
        e.clipboardData.setData('text/plain', str);//下面会说到clipboardData对象
        alert(str);
        e.preventDefault();//阻止默认行为
    };
    document.addEventListener('copy', save);
    document.execCommand("copy");//使文档处于可编辑状态，否则无效
    document.removeEventListener('copy', save);
}

let forbid = [
    {min: 0, max: 33},
    {min: 2043, max: 2207},
    {min: 3676, max: 3712},
    {min: 3808, max: 3839},
    {min: 4059, max: 4095},
    {min: 5873, max: 6075},
    {min: 6390, max: 6479},
    {min: 6688, max: 7247},
    {min: 7296, max: 7375},
    {min: 7627, max: 7677},
];

function createSpan(text: number): void {
    let span = document.createElement("span");
    let content = `&#${text};`;
    span.innerHTML = content;
    span.title = text + "";
    span.addEventListener("click", () => {
        copy(content);
    });
    body.appendChild(span);
}

function create(start: number, end: number): void {
    let count = 0;
    for (let i = start; i < end; i++) {
        let some = forbid.some(item => {
            return i >= item.min && i <= item.max;
        });
        if (some) continue;
        setTimeout(() => {
            createSpan(i);
        }, ++count * 2);

    }
}

create(0, 15000);
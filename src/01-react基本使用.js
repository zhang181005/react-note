import React from "react";
import ReactDom from "react-dom";

const element = React.createElement("h1", {id:'1', title: '标签'}, "我是内容");
const divEle = React.createElement('div', {id:'deme', className: 'aa'}, '我是一个盒子');
const ulEle = React.createElement('ul', {className: 'list'}, [
    React.createElement('li', null, '香蕉'),
    React.createElement('li', null, '苹果'),
    React.createElement('li', null, '橘子')
])

// ReactDom.render(element, document.getElementById('root'));
// ReactDom.render(divEle, document.getElementById('root'));
ReactDom.render(ulEle, document.getElementById('root'));

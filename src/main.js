function h1(text) {
  let element = document.createElement('h1');
  element.appendChild(document.createTextNode(text));
  return element;
}

document.body.appendChild(h1('Hello Webpack-Demo!'));
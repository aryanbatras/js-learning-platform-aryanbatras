function createElement(type, props, ...children) {
  return { type, props: props || {}, children };
}

function render(vdom, container) {
  const element = document.createElement(vdom.type);
  
  Object.keys(vdom.props).forEach(key => {
    element.setAttribute(key, vdom.props[key]);
  });
  
  vdom.children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      render(child, element);
    }
  });
  
  container.appendChild(element);
}
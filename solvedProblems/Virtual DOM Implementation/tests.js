// Test 1: Create simple element
const vdom = createElement('div', { className: 'test' }, 'Hello World');
console.log('VDOM structure:', JSON.stringify(vdom, null, 2));

// Test 2: Nested elements
const vdom = createElement('div', {}, 
  createElement('span', {}, 'Nested'),
  'Text'
);
console.log('Nested VDOM:', JSON.stringify(vdom, null, 2));
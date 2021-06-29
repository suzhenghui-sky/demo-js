
function querySelector(type_str) {
  return document.querySelector(type_str);
}

function createEle(ele_str) {
  return document.createElement(ele_str);
}

// 处理小点点
function currentDot(ele, index) {
  let list = ele.children;
  list = [...list];
  list.forEach(item => item.classList.remove('current'));
  list[index].classList.add('current');
}
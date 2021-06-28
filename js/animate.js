function animateFirst(node, targetNum, callback) {
  let step = (targetNum -  node.offsetLeft) / 10;
  step = step > 0 ? Math.ceil(step) : Math.floor(step);
  node.style.left = node.offsetLeft + step + 'px';

  if (node.offsetLeft > targetNum) {
    setTimeout(animateFirst, 30, node, targetNum, callback);
  }
  else if (node.offsetLeft < targetNum) {
    setTimeout(animateFirst, 30, node, targetNum, callback);
  }
  else {
    callback && callback();
  }
}

function animateSecond() {}
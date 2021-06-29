function animateFirst(node, targetNum, callback) {
  let step = (targetNum - node.offsetLeft) / 6;
  step = step > 0 ? Math.ceil(step) : Math.floor(step);
  node.style.left = node.offsetLeft + step + 'px';

  if (node.offsetLeft > targetNum) {
    setTimeout(animateFirst, 30, node, targetNum, callback);
  } else if (node.offsetLeft < targetNum) {
    setTimeout(animateFirst, 30, node, targetNum, callback);
  } else {
    callback && callback();
  }
}

// 有问题；感觉这个方法不好
// function animateSecond(node, targetNum, callback) {
//   console.log('xxxx');
//   let time = 300; // 位移总时间
//   let interval = 30; // 唯一间隔时间
//   let speed = targetNum / (time / interval); // 每次移动的偏移量
//   speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

//   function go() {
//     node.style.left = node.offsetLeft + speed + 'px';
//     if (node.offsetLeft > targetNum) {
//       setTimeout(go, 30, node, targetNum, callback);
//     } else if (node.offsetLeft < targetNum) {
//       setTimeout(go, 30, node, targetNum, callback);
//     } else {
//       callback && callback();
//     }
//   }

//   go();


// }
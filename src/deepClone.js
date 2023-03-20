// 深拷贝
function deepClone(target) {
  return JSON.parse(JSON.stringify(target));
}

//导出这个方法
export default deepClone;

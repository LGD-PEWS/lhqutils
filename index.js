//目标类型
function targetType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
//深拷贝
function deepClone(target) {
  return JSON.parse(JSON.stringify(target));
}
//测试fun
function funTest(target) {
  return target;
}

export default {
  targetType,
  deepClone,
  funTest,
};

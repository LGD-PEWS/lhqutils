function targetType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
//导出这个方法
export default targetType;

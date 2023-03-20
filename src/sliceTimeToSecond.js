// 时间精确度到秒
function sliceTimeToSecond(time) {
  return time.slice(0, time.indexOf("."));
}

//导出这个方法
export default sliceTimeToSecond;

let person={name:'tom', age:18, sayname:function(){alert(this.name);}};
console.log(person);
var leftPos = (typeof window.screenLeft == "number")? window.screenLeft: window.screenX;
var topPos = (typeof window.screenTop == "number")? window.screenTop: window.screenY;
console.log(leftPos, topPos);
//将窗口移动到屏幕左上角
window.moveTo(0,0);
//将窗向下移动 100 像素
window.moveBy(0,100);

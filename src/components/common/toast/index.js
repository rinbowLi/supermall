import Toast from './Toast'
const obj = {};

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);

  //2.创建组件构造器实例
  const toast = new toastContrustor();

  //3.手动将实例挂载到body上
  toast.$mount(document.createElement('div'));

  //渲染到body里面
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}

export default obj

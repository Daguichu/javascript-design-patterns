//保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。
class SingleDog {
  show() {
    console.log("我是一个单例对象");
  }

  static getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog();
    }
    return SingleDog.instance;
  }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();

// true
s1 === s2;

//闭包实现
SingleDog.instance = (function() {
  let instance = null;
  return function() {
    if (!instance) {
      instance = new SingleDog();
    }
    return instance;
  };
})();

//实现一个storage:使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。
class Storage {
  setItem(key, value) {
    return localStorage.setItem(key, value);
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }
}

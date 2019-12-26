class OpenButton {
  onClick() {
    const modal = new Modal();
    modal.style.display = "block";
  }
}

//装饰者模式
class Decorator {
  constructor(open_button) {
    this.open_button = open_button;
  }

  onClick() {
    this.open_button();
    //包装逻辑
    this.changeButtonStatus();
  }

  changeButtonStatus() {
    this.changeButtonText();
    this.disableButton();
  }

  disableButton() {
    const btn = document.getElementById("open");
    btn.setAttribute("disabled", true);
  }

  changeButtonText() {
    const btn = document.getElementById("open");
    btn.innerText = "快去登录";
  }
}

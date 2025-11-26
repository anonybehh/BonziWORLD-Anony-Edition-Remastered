let lastZ = 1;
let dragged = null;
let dragX = 0;
let dragY = 0;
window.onpointermove = (e) => {
  if (dragged) {
    dragged.move(e.pageX - dragX, e.pageY - dragY);
  }
};

window.onpointerup = () => {
  dragged = null;
  chatLogDragged = false;
};
class Dialog {
  constructor(opt = {}) {
    if (opt.title == null) opt.title = "Window";
    opt.width = opt.width || 400;
    opt.height = opt.height || 300;
    this.x = opt.x || 0;
    this.y = opt.y || 0;
    this.element = document.createElement("div");
    this.element.classList.add("window");
    if (opt.class) this.element.classList.add(opt.class);
    this.element.innerHTML = `
      <div class="window_header">
      ${sanitize(opt.title)}
      <div class="window_close"></div>
      </div>
      <div class="window_body"></div>
      `;
    this.move(this.x, this.y);
    this.element.style.position = "absolute";
    this.element.style.zIndex = lastZ++ + 9999;
    this.element.querySelector(".window_header").onpointerdown = (e) => {
      dragged = this;
      dragX = e.pageX - this.x;
      dragY = e.pageY - this.y;
    };
    this.element.querySelector(".window_close").onclick = () => {
      this.element.remove();
    };
    this.element.style.width = `${opt.width}px`;
    this.element.style.height = `${opt.height}px`;
    this.element.querySelector(".window_body").innerHTML = opt.html;
    content.appendChild(this.element);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
  }
}

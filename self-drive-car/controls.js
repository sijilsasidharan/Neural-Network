/**
 * Control class will assing controls to the car
 * Controls are:
 *      - Forward
 *      - Backward
 *      - Left
 *      - Right
 *
 * When the class is initialized, controls are assigned to the arrow keys
 * onkeyup and onkeydown evets are captured and state of controls will be changed
 */

class Controls {
  constructor(type) {
    this.forward = false;
    this.reverse = false;
    this.left = false;
    this.right = false;

    switch (type) {
      case "KEY":
        this.#addKeyboardListeners();
        break;
      case "DUMMY":
        this.forward = true;
        break;
    }
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
    };
    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
    };
  }
}

import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
    this.monkeysAndBanans = [];
  }
  
  setEmojis(emojis) {
    this.emojis = emojis;
    let monkeysAndBanans = this.addBananas();
    let main = document.getElementsByClassName('main')[0];

    main.removeChild(document.querySelector('#emojis'));

    let a = document.createElement('p');
    a.textContent = monkeysAndBanans;
    
    main.appendChild(a)
  }

  // Adding an banana emoji to every monkey element in the array in a new array
  addBananas() {
    this.emojis.map( monkey => {
      this.monkeysAndBanans.push(monkey + this.banana)
    })
    return this.monkeysAndBanans
  }

}

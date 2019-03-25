import {createElement} from './create-element';

export default class Component {

  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
    this._element = null;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  get element() {
    return this._element;
  }

  render() {
    this._element = createElement(this._template);
    this._createListeners();
    return this._element;
  }

  unrender() {
    this._removeListeners();
    this._element.remove();
    this._element = null;
  }

  createListeners() {
  }

  removeListeners() {
  }

}


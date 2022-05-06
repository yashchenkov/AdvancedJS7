export default class Validator {
  constructor() {

  }

  validateUsername(name) {
    const first = /\d{0,3}/; //не более трех цифр подряд
    const second = /^[^\d_-]$/; //не должен начинаться и заканчиваться цифрами, тире и подчеркиванием
    const third = /^[a-z/dA-Z]+$/;
	return first.test(name) && second.test(name) && third.test(name);
  }
}
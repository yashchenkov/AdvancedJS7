export default class Validator {
  constructor() {

  }

  validateUsername(name) {
    const first = /\d{4,}/; //не более трех цифр подряд
    const second = /^[^\d_-]/; //не должен начинаться и заканчиваться цифрами, тире и подчеркиванием
    const forth = /[^\d_-]$/; //не должен заканчиваться и заканчиваться цифрами, тире и подчеркиванием
    const third = /^[\w-]+$/;
	return !first.test(name) && second.test(name) && third.test(name) && forth.test(name);
  }
}
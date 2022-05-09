import Validator from '../Validator';

test('testing three nums in a row', () => { 
  const name = 'Vlad3333imir';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing nums on the begining', () => { 
  const name = 'Vlad3imir3';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing nums on the end', () => { 
  const name = '1Vlad3imir';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing - on the end', () => { 
  const name = 'Vlad3imir-';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing - on the begining', () => { 
  const name = 'Vlad3imir-';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing _ on the end', () => { 
  const name = 'Vlad3imir_';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing _ on the begining', () => { 
  const name = '_Vlad3imir';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing non latin character', () => { 
  const name = 'Vlad3imirооо';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing any restricted character', () => { 
  const name = 'Vlad3%@imir';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(false);
});

test('testing correct name', () => { 
  const name = 'Vl-23adimir';
  const validator = new Validator();
  
  expect(validator.validateUsername(name)).toEqual(true);
});


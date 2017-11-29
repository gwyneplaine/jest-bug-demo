console.warn('This is the test file');
console.warn('### Requiring lodash at the moment');
const lodash = require('lodash');
const reverse = require('../index');

jest.mock('lodash');
jest.fn();

describe('reverse array', () =>{
  afterEach(() => {
    jest.clearAllMocks();
  })
  it('should call lodash.reverse with the passed in array', () => {
    const array = [1, 2, 3];
    console.log('HELLO', lodash.reverse);
    reverse(array);
    expect(lodash.reverse.mock.calls[0][0]).toEqual(array);
  });
  it('should call lodash.filter with the passed in array', () => {
    const array = [1,2,3];
    reverse(array);
    expect(lodash.flatten.mock.calls[0][0]).toEqual(array);
  });
})

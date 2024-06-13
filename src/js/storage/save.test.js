import { save } from './save';
import localStorageMock from './localStorage.mock';

global.localStorage = localStorageMock;

describe('localstorage save', () => {
  it('key and value as a string', () => {
    const token = 'someAccessToken';
    save('token', token);

    expect(localStorage.token).toEqual(JSON.stringify(token));
  });
});

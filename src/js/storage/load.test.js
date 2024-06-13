import { load } from './load';
import { save } from './save';
import localStorageMock from './localStorage.mock';

global.localStorage = localStorageMock;

describe('load function', () => {
  it('is expected to load item from localstorage', () => {
    const token = 'someAccessToken';
    save('token', token);
    load('token');
    expect(localStorage.token).toEqual(JSON.stringify(token));
  });
});

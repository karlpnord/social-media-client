import { remove } from './remove';
import { save } from './save';
import localStorageMock from './localStorage.mock';

global.localStorage = localStorageMock;

describe('remove function', () => {
  it('is expected to remove item from localstorage', () => {
    const token = 'someAccessToken';
    save('token', token);
    remove('token');
    expect(localStorage.token).toEqual(undefined);
  });
});

import { remove } from './remove';
import localStorageMock from './localStorage.mock';

global.localStorage = localStorageMock;

describe('remove function', () => {
  it('is expected to remove item from localstorage', () => {
    remove('accesstoken');
    expect(localStorage.token).toEqual(undefined);
  });
});

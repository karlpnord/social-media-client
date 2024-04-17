import { load } from './load';
import localStorageMock from './localStorage.mock';

global.localStorage = localStorageMock;

describe('load function', () => {
  it('is expected to load item from localstorage', () => {
    load('accesstoken');
    expect(localStorage.token).toEqual(undefined);
  });
});

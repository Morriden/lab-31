import { renderHook, act } from '@testing-library/react-hooks';
import { useListPageHook } from './ListPageHook';

jest.mock('../FetchCalls.js', () => ({
  getRickAndMortyList() {
    return Promise.resolve({
      results: [{ test1: 'test 1', id: 1 }, { test2: 'test 2', id: 2 }, { test3: 'test 3', id: 3 }],
      info: {
        count: 591,
        pages: 30,
        next: 'https://rickandmortyapi.com/api/character/?page=2',
        prev: null
      }
    });
  }
}));

describe('ListPageHooks', () => {
  
  it('has state for lists', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useListPageHook());

      return waitFor(() => {
        expect(result.current.lists).not.toBeUndefined();
      });
    });
  });

  it('sets the lists details on mount', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useListPageHook());

      return waitFor(() => {
        expect(result.current.lists).toEqual([{ test1: 'test 1', id: 1 }, { test2: 'test 2', id: 2 }, { test3: 'test 3', id: 3 }]);
      });
    });
  });
});

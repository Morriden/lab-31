import { renderHook } from '@testing-library/react-hooks';
import { useListPageHook } from './ListPageHook';

jest.mock('../FetchCalls.js', () => ({
  getRickAndMortyList() {
    return Promise.resolve({
      lists: [{ test1: 'test 1', id: 1 }, { test2: 'test 2', id: 2 }, { test3: 'test 3', id: 3 }]
    });
  }
}));

describe('ListPageHooks', () => {
  it('has state for lists', () => {
    const { result } = renderHook(() => useListPageHook());

    expect(result.current.lists).not.toBeUndefined();
  });

  it('sets the lists details on mount', () => {
    const { result, waitFor } = renderHook(() => useListPageHook());

    return waitFor(() => {
      expect(result.current.lists).toEqual([{ test1: 'test 1', id: 1 }, { test2: 'test 2', id: 2 }, { test3: 'test 3', id: 3 }]);
    });
  });
});

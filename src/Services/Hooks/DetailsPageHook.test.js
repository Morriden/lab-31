import { renderHook, act } from '@testing-library/react-hooks';
import { useDetailPageHook } from './DetailsPageHook';

jest.mock('../FetchCalls.js', () => ({
  getRickAndMortyCharacter() {
    return Promise.resolve({
      results: {
        name: 'Bobby',
        status: 'Alive',
        species: 'A hill',
        image: 'a picture'
      }
    });
  }
}));

describe('DetailPageHooks', () => {
  it('has state for name', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailPageHook());

      return waitFor(() => {
        expect(result.current.name).not.toBeUndefined();
      });
    });
  });

  it('has state for status', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailPageHook());

      return waitFor(() => {
        expect(result.current.status).not.toBeUndefined();
      });
    });
  });

  it('has state for species', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailPageHook());

      return waitFor(() => {
        expect(result.current.species).not.toBeUndefined();
      });
    });
  });

  it('has state for image', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailPageHook());

      return waitFor(() => {
        expect(result.current.image).not.toBeUndefined();
      });
    });
  });
});


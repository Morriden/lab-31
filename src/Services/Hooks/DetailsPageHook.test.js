import { renderHook } from '@testing-library/react-hooks';
import { useDetailPageHook } from './DetailsPageHook';

describe('DetailPageHooks', () => {

  let result;
  beforeEach(() => {
    const newResult = renderHook(() => useDetailPageHook());
    result = newResult.result;
  });

  it('has state for name', () => {
    expect(result.current.name).not.toBeUndefined();
  });

  it('has state for status', () => {
    expect(result.current.status).not.toBeUndefined();
  });

  it('has state for species', () => {
    expect(result.current.species).not.toBeUndefined();
  });

  it('has state for image', () => {
    expect(result.current.image).not.toBeUndefined();
  });
});


import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

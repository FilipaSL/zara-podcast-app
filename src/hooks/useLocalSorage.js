import { useState } from "react";

// Hook
function useLocalStorage(key, timestampKey, initialValue) {
  const ONE_DAY = 24 * 60 * 60 * 1000; // number of milliseconds in one day

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    const timestamp = localStorage.getItem(timestampKey);

    if (item && timestamp) {
      const timeSinceLastUpdate = Date.now() - new Date(timestamp);

      if (timeSinceLastUpdate < ONE_DAY) {
        return item ? JSON.parse(item) : initialValue;
      }
    }
    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem("timestamp", new Date());
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}

export default useLocalStorage;

import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const ONE_DAY = 24 * 60 * 60 * 1000; // number of milliseconds in one day

  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);

    if (item) {
      const parsedItem = JSON.parse(item);

      const timeSinceLastUpdate = Date.now() - new Date(parsedItem.timestamp);

      if (timeSinceLastUpdate < ONE_DAY) {
        //returns item data if it was fetched less that one day ago
        return parsedItem;
      }
    }

    //returns initial value if item doesn't exist on storage or needs to be updated
    return initialValue;
  });

  const setValue = (value) => {
    const newEntry = {
      data: value,
      timestamp: new Date(),
    };

    setStoredValue(newEntry);
    localStorage.setItem(key, JSON.stringify(newEntry));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;

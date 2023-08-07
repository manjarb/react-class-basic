import { useEffect, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOnline(true)
    }, 3000)
  }, []);

  return {
    isOnline,
    setIsOnline
  }
}
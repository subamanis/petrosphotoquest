import { useState, useEffect } from 'react';

export const useLocation = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  return path;
};
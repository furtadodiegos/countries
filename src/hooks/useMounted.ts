import { useEffect, useState } from 'react';

const useMounted = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return { ready };
};

export default useMounted;

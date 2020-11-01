  
import { useRef } from 'react';

// This hook simply display a render in a component.
// Just import and use.
const useRenderCounter = () => {
  const renders = useRef(0);
  // eslint-disable-next-line no-console
  console.log('renders: ', (renders.current += 1));
};

export default useRenderCounter;
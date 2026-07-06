import { useRef, useEffect } from 'react';

function useClickOutside(handler: () => void): React.RefObject<HTMLUListElement | null> {
  const ref = useRef<HTMLUListElement>(null);
  useEffect((): (() => void) => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      handler();
    }
    document.addEventListener('click', listener);
    return (): void => {
      document.removeEventListener('click', listener)
    }
  },[handler])

  return ref;
}


export default useClickOutside;
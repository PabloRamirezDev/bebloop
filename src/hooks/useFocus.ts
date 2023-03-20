import { useRef } from 'react';

export default function useFocus<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);
  const setFocus = () => elementRef?.current?.focus?.();

  return [elementRef, setFocus] as const
}
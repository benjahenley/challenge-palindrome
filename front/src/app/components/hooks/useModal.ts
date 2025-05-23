import { useState, useCallback } from "react";

export function useModal() {
  const [modals, setModals] = useState<Record<string, boolean>>({});

  const open = useCallback((id: string) => {
    setModals((prev) => ({ ...prev, [id]: true }));
  }, []);

  const close = useCallback((id: string) => {
    setModals((prev) => ({ ...prev, [id]: false }));
  }, []);

  const toggle = useCallback((id: string) => {
    setModals((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const isOpen = useCallback((id: string) => Boolean(modals[id]), [modals]);

  return { open, close, toggle, isOpen };
}

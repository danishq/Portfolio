import { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_KEY = 'dq_portfolio_exit_intent_dismissed';
const MIN_DESKTOP_ENGAGEMENT_SEC = 9; // 9 seconds engagement required
const MIN_MOBILE_ENGAGEMENT_SEC = 14; // 14 seconds for mobile scroll trigger

interface UseExitIntentOptions {
  disabled?: boolean;
}

export function useExitIntent(options: UseExitIntentOptions = {}) {
  const { disabled = false } = options;
  const [isOpen, setIsOpen] = useState(false);
  const mountTimeRef = useRef<number | null>(null);
  const hasTriggeredRef = useRef<boolean>(false);

  // Initialize mount time inside effect to maintain purity during render
  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  // Check if user already dismissed it this session
  const checkDismissed = useCallback((): boolean => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  }, []);

  const open = useCallback(() => {
    if (checkDismissed() || hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsOpen(true);
  }, [checkDismissed]);

  const forceOpen = useCallback(() => {
    // For manual / dev trigger, bypass session check
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  const resetSession = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      hasTriggeredRef.current = false;
    } catch {
      // ignore
    }
  }, []);

  // Desktop mouse exit intent detection
  useEffect(() => {
    if (disabled || checkDismissed()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      const mountTime = mountTimeRef.current ?? Date.now();
      const elapsedSec = (Date.now() - mountTime) / 1000;
      if (
        elapsedSec >= MIN_DESKTOP_ENGAGEMENT_SEC &&
        e.clientY <= 15 &&
        (!e.relatedTarget || (e.relatedTarget as HTMLElement).nodeName === 'HTML')
      ) {
        open();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled, checkDismissed, open]);

  // Mobile conservative scroll engagement detection
  useEffect(() => {
    if (disabled || checkDismissed()) return;

    // Only apply on touch/mobile devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouch) return;

    let timer: number | undefined;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const scrollRatio = scrollPos / (totalHeight || 1);
      const mountTime = mountTimeRef.current ?? Date.now();
      const elapsedSec = (Date.now() - mountTime) / 1000;

      // Conservative mobile trigger: scrolled past 75% after minimum 14 seconds
      if (scrollRatio > 0.75 && elapsedSec >= MIN_MOBILE_ENGAGEMENT_SEC) {
        if (!timer) {
          timer = window.setTimeout(() => {
            open();
          }, 2500); // Small pause so user isn't interrupted while active
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [disabled, checkDismissed, open]);

  // Lock body scroll when open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, close]);

  return {
    isOpen,
    open,
    forceOpen,
    close,
    resetSession,
    isDismissed: checkDismissed(),
  };
}

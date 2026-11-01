import { useState, useEffect, useCallback, useRef } from 'react';

export type NotificationPermissionState = 'default' | 'granted' | 'denied' | 'unsupported';

interface UseServiceWorkerReturn {
  isSupported: boolean;
  permission: NotificationPermissionState;
  isRegistered: boolean;
  requestPermission: () => Promise<boolean>;
  sendTestNotification: (title?: string, body?: string) => Promise<boolean>;
  statusMessage: string | null;
}

function getIsSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'serviceWorker' in navigator && 'Notification' in window;
}

function getInitialPermission(): NotificationPermissionState {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'unsupported';
  }
  return Notification.permission as NotificationPermissionState;
}

export function useServiceWorker(): UseServiceWorkerReturn {
  const [isSupported] = useState<boolean>(getIsSupported);
  const [permission, setPermission] = useState<NotificationPermissionState>(getInitialPermission);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    // Register service worker
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((reg) => {
        registrationRef.current = reg;
        setIsRegistered(true);
      })
      .catch((err) => {
        console.warn('Service Worker registration skipped or failed:', err);
        setIsRegistered(false);
      });
  }, []);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!isSupported) {
      setStatusMessage('Web notifications are not supported in this browser.');
      return false;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result as NotificationPermissionState);

      if (result === 'granted') {
        setStatusMessage('Notifications enabled! You can now send a local test notification.');
        return true;
      } else if (result === 'denied') {
        setStatusMessage('Notification permission was blocked in browser settings.');
        return false;
      } else {
        setStatusMessage('Notification request dismissed.');
        return false;
      }
    } catch (err) {
      console.error('Error requesting notification permission:', err);
      setStatusMessage('Failed to request permission.');
      return false;
    }
  }, [isSupported]);

  const sendTestNotification = useCallback(
    async (
      title = "Danish's Portfolio",
      body = 'Thanks for enabling notifications. This is a local demonstration.'
    ): Promise<boolean> => {
      if (!isSupported || Notification.permission !== 'granted') {
        setStatusMessage('Please grant notification permission first.');
        return false;
      }

      try {
        let reg = registrationRef.current;
        if (!reg && 'serviceWorker' in navigator) {
          reg = await navigator.serviceWorker.ready;
        }

        if (reg && 'showNotification' in reg) {
          await reg.showNotification(title, {
            body,
            icon: '/favicon.svg',
            badge: '/favicon.svg',
            tag: 'portfolio-demo',
            data: { url: '/#projects' },
          });
          setStatusMessage('Demonstration notification sent!');
          return true;
        } else {
          // Fallback to Window Notification API
          new Notification(title, {
            body,
            icon: '/favicon.svg',
          });
          setStatusMessage('Demonstration notification triggered!');
          return true;
        }
      } catch (err) {
        console.error('Failed to trigger notification:', err);
        setStatusMessage('Unable to display notification.');
        return false;
      }
    },
    [isSupported]
  );

  return {
    isSupported,
    permission,
    isRegistered,
    requestPermission,
    sendTestNotification,
    statusMessage,
  };
}

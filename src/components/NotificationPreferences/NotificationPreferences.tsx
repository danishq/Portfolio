import { useServiceWorker } from '../../hooks/useServiceWorker';
import './NotificationPreferences.css';

export function NotificationPreferences() {
  const {
    isSupported,
    permission,
    requestPermission,
    sendTestNotification,
    statusMessage,
  } = useServiceWorker();

  const handleEnableClick = async () => {
    await requestPermission();
  };

  const handleTestClick = async () => {
    await sendTestNotification(
      "Danish's Portfolio",
      'Thanks for enabling notifications. This is a local demonstration.'
    );
  };

  if (!isSupported) {
    return null; // Gracefully omit if browser doesn't support Notifications
  }

  return (
    <aside className="notification-section" aria-label="Browser Notification Demonstration">
      <div className="container">
        <div className="notification-box">
          <div className="notification-details">
            <span className="notification-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span>Stay connected</span>
            </span>

            <h3 className="notification-title">Native Browser Notifications (Phase 1)</h3>

            <p className="notification-desc">
              Enable browser notifications to see how Service Workers handle local desktop alerts
              and event click routing.
            </p>

            <p className="notification-architecture-note">
              ⚙ Phase 1 operates locally via ServiceWorkerRegistration.showNotification(). Designed
              for Phase 2 Spring Boot &amp; VAPID remote Push integration.
            </p>
          </div>

          <div className="notification-controls">
            {permission === 'default' && (
              <button
                type="button"
                className="notification-btn-enable"
                onClick={handleEnableClick}
                aria-label="Enable browser notifications"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span>Enable Notifications</span>
              </button>
            )}

            {permission === 'granted' && (
              <>
                <div className="notification-status-tag granted">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Notifications Allowed</span>
                </div>
                <button
                  type="button"
                  className="notification-btn-test"
                  onClick={handleTestClick}
                  aria-label="Send a local test notification"
                >
                  <span>Send Test Notification</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            {permission === 'denied' && (
              <div className="notification-status-tag denied">
                <span>Blocked in Browser Settings</span>
              </div>
            )}

            {statusMessage && <span className="notification-feedback">{statusMessage}</span>}
          </div>
        </div>
      </div>
    </aside>
  );
}

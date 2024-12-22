"use client"
import { useEffect } from 'react';

function ServiceWorkerRegistration() {
  useEffect(() => {
    console.log('ServiceWorkerRegistration');
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return null;
}

export default ServiceWorkerRegistration;

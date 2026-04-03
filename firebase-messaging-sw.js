importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCoUnTHiOudFprhSmM48PcRVQvAUn-ODWY",
  authDomain: "ghost-admin-97a8a.firebaseapp.com",
  projectId: "ghost-admin-97a8a",
  storageBucket: "ghost-admin-97a8a.firebasestorage.app",
  messagingSenderId: "797267036010",
  appId: "1:797267036010:web:79b7b3caa45ab402aac713",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || 'Ghost Admin';
  const body = payload.notification?.body || 'Nova mensagem';
  self.registration.showNotification(title, {
    body,
    icon: 'app_icon.png',
    badge: 'app_icon.png',
    vibrate: [200, 100, 200, 100, 200],
    tag: 'ghost-msg',
    renotify: true,
  });
});

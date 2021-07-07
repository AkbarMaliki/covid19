// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.344034493973
// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.2//firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.2//firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyAbFVto_BzFMlbLeIwFJFWmhD-zxboOYxQ",
  authDomain: "kominfobalangan-d2008.firebaseapp.com",
  projectId: "kominfobalangan-d2008",
  storageBucket: "kominfobalangan-d2008.appspot.com",
  messagingSenderId: "494678481790",
  appId: "1:494678481790:web:b608138489f541ce00f12f",
  measurementId: "G-LJMRRD9RKK"
});
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
  messaging.setBackgroundMessageHandler(payload => {
    console.log(payload)
    // const notification = JSON.parse(payload.data.notification);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body
    };
    //Show the notification :)
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
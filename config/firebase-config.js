// Firebase Configuration
// Replace these values with your Firebase project credentials
const FIREBASE_CONFIG = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
let firebaseApp = null;
let db = null;

function initFirebase() {
    if (window.firebaseModule && !firebaseApp) {
        firebaseApp = window.firebaseModule.initializeApp(FIREBASE_CONFIG);
        db = window.firebaseModule.getFirestore(firebaseApp);
        console.log('Firebase initialized successfully');
    }
    return { app: firebaseApp, db: db };
}

// For development/testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FIREBASE_CONFIG, initFirebase };
}

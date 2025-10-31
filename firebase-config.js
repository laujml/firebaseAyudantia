// ============================================
// 🔥 CONFIGURACIÓN DE FIREBASE
// ============================================
// Este archivo conecta tu HTML con Firebase
// Solo necesitas configurarlo UNA VEZ

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCctj5hkLTsgJyYVDuDpP_Wejm9nfnLmJ8",
  authDomain: "fir-2b58c.firebaseapp.com",
  projectId: "fir-2b58c",
  storageBucket: "fir-2b58c.firebasestorage.app",
  messagingSenderId: "585010347515",
  appId: "1:585010347515:web:c7ffddce2809a8320a5f5e",
  measurementId: "G-6R55F20XQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Para la base de datos Firestore

// 5️⃣ Exportar para usar en otros archivos JavaScript
export { app, analytics, db };
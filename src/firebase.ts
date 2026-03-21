import { initializeApp, getApps } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGaEH14yarSIT_bpwPVETCRuIrNs4MXfE",
  authDomain: "arogya-setu-a258c.firebaseapp.com",
  projectId: "arogya-setu-a258c",
  storageBucket: "arogya-setu-a258c.firebasestorage.app",
  messagingSenderId: "118239615900",
  appId: "1:118239615900:web:bdb2c5802912f344fac659",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Disable app verification for localhost testing
if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  auth.settings.appVerificationDisabledForTesting = true;
}

// ✅ reCAPTCHA helper for phone auth
export function setupRecaptcha(elementId: string) {
  return new RecaptchaVerifier(auth, elementId, {
    size: "invisible",
  });
}
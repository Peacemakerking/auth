import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2LWzXXNmU7_vRmyQe-O1bCBlvV57aG20",
  authDomain: "authenticati-f2d4a.firebaseapp.com",
  projectId: "authenticati-f2d4a",
  storageBucket: "authenticati-f2d4a.firebasestorage.app",
  messagingSenderId: "48576883412",
  appId: "1:48576883412:web:57102fe370c7db4986e941",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

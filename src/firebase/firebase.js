import { initializeApp } from "firebase/app";
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: "test-task-bf9bf.firebaseapp.com",
	projectId: "test-task-bf9bf",
	storageBucket: "test-task-bf9bf.appspot.com",
	messagingSenderId: "929359259494",
	appId: "1:929359259494:web:36b15757ddadcd95b74aa7"
};

export const app = initializeApp(firebaseConfig);
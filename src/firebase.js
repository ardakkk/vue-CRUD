import { initializeApp } from 'firebase'; 

const app = initializeApp({
	apiKey: "AIzaSyCfaGZ47kcwUd433aJ4f7n9qI3XPlcmoyA",
	authDomain: "fir-vue-4c258.firebaseapp.com",
	databaseURL: "https://fir-vue-4c258.firebaseio.com",
	projectId: "fir-vue-4c258",
	storageBucket: "",
	messagingSenderId: "72915754423"
});

export const db  = app.database();
export const namesRef = db.ref('names');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc , collection, getDoc, doc, getDocs, getFirestore, query, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy4FUPz9yjvEclPOWPxs_CsZs8gCOx32c",
  authDomain: "reactjs-61cd7.firebaseapp.com",
  projectId: "reactjs-61cd7",
  storageBucket: "reactjs-61cd7.appspot.com",
  messagingSenderId: "494817974893",
  appId: "1:494817974893:web:28ab2e5b73ad11e7303d64"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);






export const getProducts = async () =>{
    const productsCollectionRef = collection(db ,"Productos");
    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map(docu =>{
        return {...docu.data() , id : docu.id}
        
    })

    return docsData
     
}


export const getProductsByCategory = async (categoryToSearch) =>{
    const productsCollectionRef = collection(db, "Productos");
    const queryCollection = query (
        productsCollectionRef,
        where("Category", "==",categoryToSearch)
    );
    const snapshot = await getDocs(queryCollection)
    const docsData = snapshot.docs.map((docu) => {
        return {...docu.data(),id: docu.id};
    });
    return docsData;
}


export const getOneProduct =async (idToSearch) =>{
    const productsCollectionRef = collection(db, "Productos");
    const productRef = doc(productsCollectionRef,idToSearch);
    const snapshot = await getDoc(productRef);
    return {...snapshot.data(), id: snapshot.id};

};

export const createBuyOrder = async (order) => {
    const ordersCollectionRef = collection(db, "orders");
    const orderDoc = await addDoc(ordersCollectionRef , order);
    return orderDoc.id;
}



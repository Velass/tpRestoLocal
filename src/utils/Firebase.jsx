import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyCsArDuQA2WrLS_9Ve9Ft4BAXO_4dYd4FA",
    authDomain: "tprestolocal.firebaseapp.com",
    projectId: "tprestolocal",
    storageBucket: "tprestolocal.appspot.com",
    messagingSenderId: "723001827319",
    appId: "1:723001827319:web:b8d869d41a8588dd3798f2",
    measurementId: "G-BKNTNPX66M",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line no-unused-vars
  const db = getFirestore(app);

  // Initialise Cloud Firestore
  //const firestore = app.firestore();

  // Nom de la collection (peut être n'importe quel nom significatif pour votre application)
  const collectionName = "pizzasCollection";

  // Nom du document (peut être n'importe quel nom significatif pour votre JSON)
  const documentName = "GUUzMY8eSicxn7vilnSe";

  const jsonToStore = {
    pizzas: [
      {
        id: 1,
        name: "Margherita",
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
        price: 9.99,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 2,
        name: "Pepperoni",
        ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
        price: 11.99,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 3,
        name: "Vegetarian",
        ingredients: [
          "Tomato Sauce",
          "Mozzarella",
          "Mushrooms",
          "Bell Peppers",
          "Onions",
          "Olives",
        ],
        price: 10.99,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 4,
        name: "BBQ Chicken",
        ingredients: [
          "BBQ Sauce",
          "Mozzarella",
          "Chicken",
          "Red Onions",
          "Cilantro",
        ],
        price: 12.99,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 5,
        name: "Hawaiian",
        ingredients: ["Tomato Sauce", "Mozzarella", "Ham"],
        price: 11.49,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 6,
        name: "Capricciosa",
        ingredients: [
          "Tomato Sauce",
          "Mozzarella",
          "Ham",
          "Mushrooms",
          "Artichokes",
        ],
        price: 12.49,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 7,
        name: "Quattro Formaggi",
        ingredients: [
          "Tomato Sauce",
          "Mozzarella",
          "Gorgonzola",
          "Fontina",
          "Parmesan",
        ],
        price: 13.99,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 8,
        name: "Mediterranean",
        ingredients: [
          "Tomato Sauce",
          "Mozzarella",
          "Feta",
          "Olives",
          "Tomatoes",
          "Red Onions",
        ],
        price: 11.99,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 9,
        name: "Prosciutto e Rucola",
        ingredients: [
          "Tomato Sauce",
          "Mozzarella",
          "Prosciutto",
          "Arugula",
          "Parmesan",
        ],
        price: 13.49,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
      {
        id: 10,
        name: "Chicken Alfredo",
        ingredients: ["Alfredo Sauce", "Mozzarella", "Chicken", "Broccoli"],
        price: 12.49,
        image: "https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800",
      },
    ],
  };

  const Firebase = {
    setData: async () => {
      await setDoc(doc(db, collectionName, documentName), jsonToStore);
    },
    getData: async () => {
      return await getDoc(doc(db, collectionName, documentName));
    },

    
  };

  
  export default Firebase; 

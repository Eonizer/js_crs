import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB2N8ak9QDTqxktD2vlimJTkn9aEid34hA",
    authDomain: "fir-9-sandbox-f9f53.firebaseapp.com",
    projectId: "fir-9-sandbox-f9f53",
    storageBucket: "fir-9-sandbox-f9f53.appspot.com",
    messagingSenderId: "684607770996",
    appId: "1:684607770996:web:899b833ae3470f93645c21"
};

//init app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

//collection ref
const colRef = collection(db,'books');

//queries
const q  = query(colRef, orderBy('createdAt'));

//real time get collection data
const unsubCol = onSnapshot(q, snapshot => {
    let books = [];
    snapshot.docs.forEach(doc => {
        books.push({...doc.data(), id: doc.id});
    });
    console.log(books);
});

//adding a doc
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', e => {
    e.preventDefault();

    addDoc(colRef,{
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        addBookForm.reset();
    })
    .catch(err => {
        console.log(err.message);
    });
});

//deleting doc
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', e => {
    e.preventDefault();

    const docRef = doc(db, 'books', deleteBookForm.id.value);
    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset();    
        })
        .catch(err => {
            console.log(err.message);
        });
});

//get a single doc
const docRef = doc(db,'books','ZzoBejUvBMGTb2M0ToRt');

const unsubDoc = onSnapshot(docRef, doc => {
    console.log(doc.data(), doc.id);
});

//updating a doc
const updateForm = document.querySelector('.update');
updateForm.addEventListener('submit', e => {
    e.preventDefault();

    const docRef = doc(db, 'books', updateForm.id.value);
    
    updateDoc(docRef, {
        title: 'updated title'
    })
    .then(() => {
        updateForm.reset();
    })
});

const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(cred => {
            // console.log('user created: ', cred.user);
            signupForm.reset();
        })
        .catch(err => {
            console.log(err.message);
        });
});

//login in n out
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // console.log('user signed out');
        })
        .catch(err => {
            console.log(err.message);
        });
});

const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then(cred => {
            // console.log('user logged in ', cred.user);
        })
        .catch(err => {
            console.log(err.message);
        });
});

//sub to auth changes
const unsubAuth = onAuthStateChanged(auth, user => {
    console.log('user status changed: ', user);
});

const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener(() => {
    console.log('unsubbing');
    unsubCol();
    unsubDoc();
    unsubAuth();
});
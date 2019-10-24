import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAZTnWgR4nbS583gtj_mpEmBbr8cHmJh3c",
    authDomain: "vue-dashboard-firebase.firebaseapp.com",
    databaseURL: "https://vue-dashboard-firebase.firebaseio.com",
    projectId: "vue-dashboard-firebas",
    storageBucket: "vue-dashboard-firebase.appspot.com",
    messagingSenderId: "415089195747"
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore
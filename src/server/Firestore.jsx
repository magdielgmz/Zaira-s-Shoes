import app from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig= {
        apiKey: "AIzaSyCzH6tW0_OtsVmUKRft5IrHwtamVRMqC-o",
        authDomain: "zayra-sshoes.firebaseapp.com",
        databaseURL: "https://zayra-sshoes.firebaseio.com",
        projectId: "zayra-sshoes",
        storageBucket: "zayra-sshoes.appspot.com",
        messagingSenderId: "1061178556238",
        appId: "1:1061178556238:web:de0f920da7be61bf14681f",
        measurementId: "G-TX8SPRG9BJ"
      
}

class Firebase{
        constructor(){
                app.initializeApp(firebaseConfig)
                this.db = app.firestore()
                
        }
}

export default Firebase

//firebase.initializeApp(firebaseConfig)

//export default firebaseConfig
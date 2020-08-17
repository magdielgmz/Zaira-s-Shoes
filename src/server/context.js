import React  from 'react'
import 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const FirebaseContext = React.createContext()

export default FirebaseContext


export const consumerFirebase = Component => props => (

    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}

    </FirebaseContext.Consumer>

)
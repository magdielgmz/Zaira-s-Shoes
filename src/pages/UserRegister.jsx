import React, { Component } from 'react';
import { compose } from 'recompose'
import { consumerFirebase } from '../server/context';


class UserRegister extends Component {
    render() {
        return (
            <>
            <div>
                <h1>registro de Usuarios</h1>
            </div>
            <div className="container">
                <input type="email" name="email" id="email" placeholder="Email"/>
            </div>
            </>
        );
    }
}

export default compose(consumerFirebase)(UserRegister);

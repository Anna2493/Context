import React, { createContext } from 'react';

//CONTEXT
//The values here will be overwritten with by the UserProvider
const UserContext = createContext({
    username: '',
    updateUsername: () => {},
})

//PROVIDER
//Parent component that will manage the sharted state
export class UserProvider extends React.Component {
    updateUsername = newUsername => {
        this.setState({ username: newUsername });
    };

    state = {
        username: 'user',
        updateUsername: this.updateUsername,
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

//CONSUMER 
//All component to access the shared state
export const UserConsumer = UserContext.Consumer;
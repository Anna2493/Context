import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserMessage from './UserMessage';
import SettingsForm from './UserSettings';
import { UserProvider } from './user-context';

function App() {
  return (
    <UserProvider>
      <UserMessage />
      <SettingsForm />
    </UserProvider>
  );
}

export default App;

//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
/*
//New context

const MyContext = React.createContext();

//Provider component
class MyProvider extends Component {
  state = {
    name:'',
    age:''
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div>
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
            </React.Fragment>           
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    return (
      <MyContext.Consumer>
        <div>
          <p>I'm the app</p>
          <input 
            type="text"
            name="name"
            placeholder="name"
            onChange={this.state.name}
          />
          <input 
            type="number"
            name="age"
            placeholder="age"
            onChange={this.state.age}
          />
          <Family />
        </div>
        {(context) => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
            </React.Fragment>           
          )}
      </MyContext.Consumer>
    );
  }
  
}

export default App;

*/

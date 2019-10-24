import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id:'1' ,name: 'Max', age: 28},
      {id:'2', name: 'Min', age: 20},
      {id:'3',name: 'Avi', age: 24}
    ],
    otherState : 'some other value',
    showPersons : false
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];

    persons.splice(personIndex,1);

    this.setState({persons});
  }

  nameChangedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons})
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button style={style}
           onClick={this.togglePersonsHandler}>Toggle Person</button>
        { 
          this.state.showPersons ?
            <div >
              {this.state.persons.map((person,index) => {
                return <Person 
                          key={person.id} 
                          click={() => this.deletePersonHandler(index)}  
                          name={person.name} 
                          age={person.age}
                          changed={() => this.nameChangedHandler(event, person.id)}/>
              })}
              
              {/* <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Maxi')}
                changed={this.nameChangedHandler}
                />
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/> */}
            </div> : null
        }
      </div>
    );
  }
}

export default App;

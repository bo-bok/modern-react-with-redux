// export
// classes
// state

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';


// functional based component
// const Searchbar = () => {
//   return <input />;
// };
// some info goes in, some jsx comes out. The end.

// class-based component
// we use this whenever we want a component to have some kind of internal record keeping - an idea of what has happened to itself since it has been rendered.
// we use it when a component needs some self-reflection, awareness
// we create it using an es6 class. It's an es6 object with some methods attached.

class Searchbar extends Component {
  // declare a new class with name searchbar and give it access to all of the functionality that react.component has.

  // state
  // reserved for some tasks like initialising state. Gets called every time there is a new *instance* of a class
  constructor(props) {
    super(props);

    this.state =  {term: ''}; // object contains the properties that we want to record on the state
    // let's record the value of our input on the state
  }

  // we still need a way for it to return somehting, so let's give it a render method. Ever class based react componenet MUST have it's own render method.
  //
  // must also return some jsx, else end up with an error
  render() {
    // B
    // return <input onChange={this.onInputChange} />; //<<<<< js variable | onChange = props (property)
    // what we're saying: create a new input element, and pass it a prop with a value of onchange, this.onInputChange
    // we could condense the listener and wht we do on listen to one line (choosing not to as it's less readable IMO). This is how that would look.
    // return <input onChange={ event => console.log(event.target.value)} />;

    return ( //here the input changing tells the state what it should be BUT the state should tell the input what the current value should be
      <div>
        <input value={this.state.term} onChange={event => this.setState({ term: event.target.value})} />
        {/* Value of the input(term): {this.state.term} */}
      </div> // can write this.state.term here because I am only referencing the state, not modifying it
    );
    // this.state = event.target.value = BAD!!! why? need to call react setState method so it knows that the state has **changed**
  }

  // Handling User Events
  // declare an event handler (a)
  // we pass the handler to the element that we wnt to listen to for events (b)
  // naming convention: on/handler - Name of the element that your watching for an event - name of event you're watching for
  //
  // A
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}
export default Searchbar; //just export the searchbar




// State
//
// What is it?
// state is  plain js object that is used to record and react to user events.
// each class based component  that we define has it's own state object
// whenever the state of a componenet is changed, the component immediately re-renders and forces its children to re-render
// functional components do not have state, only class based ones do
//
// there is a distinction between the way we creating and updating state
//

// who decides state - when the state tells the component what its value should be (as opposed to the component telling the state what its value should be, it becomes a 'controlled componenet'). 

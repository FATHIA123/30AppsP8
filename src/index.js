import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component {
// this other function is not required by react.! the costructor funtion
// its more of a function that belongs to the JS language itself as suppose to some react specific thing
// this is a specially named function that is particular to the JS language not specific to react
// in a JS class the constructor function is the very first function that is going to be called on any time an instance of this class is created
// in other words any time that we create a new instance of App component and show it on the screen the constrctor function is going to be automatically and instatly called
// before anything else. And so that makes it a very good location for us to initallize our state  when our component is first created
// constructor(props) {
//     super(props);
// we are initalizing out state object here
// this state object will eventually contain some different pieces of information important data that is impoetant 
// and relavant to our component that we are putting together. 
// the most relavent pieace of data that we have is our latitude . Sowe might want to initialize our state object to include  a property called latitude.
// when we initalize a property in the state object we are going to usually default it to some reasonable or sensable value
// in this case we know our latitue is going to be some type of number like a decimal number. When we don't know the number, we usually default the number to "null", we don't know the value but we will eventually 
// now since the state object is assigned into the this.state property 
// we can freely refrence the state object and properties inside of it from any function inside of the App component 
// so inour render method were we try to print out latitude  I can put in a set of {this.state.lat} 

// So the general idea is that we might make use of this state property inside of our JSX OR Other fucntions inside of our components 
// THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE 
// this.state = {
//     lat: null,
//     errMessage: ''
// };

// }

// this is equvilant to having a constructor function with the sole purposes of initiallizing state.
// I works perfectly without constructor
state = {
    lat: null,
    errMessage: ''
};

componentDidMount(){
    // the render method is going to be called all the time not best practice to addd the function in there especially if it takes time to load
    // So since the constructor is the first things to get initalized it will initalize this funtion and we will get the location first as well even though it loads slow,
    // so we will have the location before we get to render(lifecycle)
        window.navigator.geolocation.getCurrentPosition(
            // to uppdate our state object we call setState 
            position => {
               this.setState({ lat: position.coords.latitude});
                // What we don't want to do here is when we want to update our state object 
                // this.state.lat = position.coords.latitude 
                // NEVER DO THIS!!!! Never do a direct assignment to our state object 
                // the one single exception to this rule is when we initalize our state inside the constructor function 
            },
            // console.log(position), so when we console.loged this we saw that it prented out the position we are in. It was an object with a lot of junk but it also included latitute, we want that latiude, manipulate to get that latitude 
            err => this.setState({errMessage: err.message })
       );

}
// React says we have to define render
    render() {
       
        if(this.state.errMessage && !this.state.lat) {
            return <div>{this.state.errMessage}</div>;
        } 
        if(!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if(!this.state.errMessage && !this.state.lat) {
            return <div>Loading!</div>;
        }
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);
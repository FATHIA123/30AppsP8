import './SeasonDisplay.css'
import React from 'react';
// I am going to define a new funtion above my function season display whose sole purpose is to determine what the season is
//  we could definetly put this in the Season display body 
// but extracting as much logic out of function componet as possible is good 

const seasonConfig = {
summer:{
    text: "Let's hit the beach",
    iconName: 'sun'
},
winter: {
    text:"Brr, it's cold!",
    iconName:'snowflake'
}
};


const getSeason = (lat, month) => {
// before we start adding any logic into the function lets check to see if we can call this function inside of the SeasonDisplay function
// now lets create the function

if(month > 2 && month <9) {
    // we are going to use a javascript ternary expression to determine if we are in the N or S hemesphiere
 return lat > 0 ? 'summer' : 'winter';
//  if lat is > 0 then we mmust be in the northen hemisphere
// if we are in the northern hemisphere I want to return the value "summer" else "winter"
// this expresion will be evaluated: if it returns true , we are going to return summer else we are going to return winter
// this is only going to handle the summer months
}
else {
    // if its between those months return the top 
    // else if the months is <2 && >9 and the lat is > 0 return this
    // if we are in the northen hemisphere during the winter months that means we are in winter other wise we must be in the southern hemisphere its summer
    return lat > 0 ? 'winter' : 'summer';
}

};

const SeasonDisplay = (props) => {
    // console.log(props.lat);
    // We got our latitued down into our seasondisplay component
    // So now the only other thing we need to do, is figure out the currrent month
    // And then use the month and lat to decide if it is summer or winter

    // Getting the month is straight forward 
    // You can go on to your console and type in new Date().getMonth()
    // it will print out the current month you are in integer
    // this is a zero index date so 10 indicates the 11 month of the year  


    // We are going to put together a code snipt to essentially determine the current season as a string 
    // So I want to end up with a simple string that says summer or winter 
    // this will allow our get season to get the latituted and the month 
    const season = getSeason(props.lat, new Date().getMonth());
    // const text =  season === 'winter' ? 'Brr, it is chilly' : 'Lets hit the beach!' 

    const {text, iconName} = seasonConfig[season]; // it is going to return {text, iconName}

    // console.log(season);
    return (
    <div className={`season-display ${season}`}>
    {/* {season === 'winter' ? 'Brr, it is chilly' : 'Lets hit the beach!' } */}
    {/* you can add it directly into the div like this under return or use a helper function */}
            <i className={`iconleft massive ${iconName} icon`}/>
                <h1>{text}</h1>
            <i className={`iconright massive ${iconName} icon`}/>
    </div>
    );
};

export default SeasonDisplay;
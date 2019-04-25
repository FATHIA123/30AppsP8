import React from 'react'

const Spiner = (props) => {
return (
  <div className="ui active dimmer">
    <div className="ui massive text loader">{props.message}</div>
</div>
);

};

Spiner.defaultProps = {

message:'loading...'

};
export default Spiner;
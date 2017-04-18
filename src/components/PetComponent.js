var React = require('react');

var comStyle = {
  display: 'inline-block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

var btnStyle = {
  height: '25px',
  width: '70px',
  marginTop: '10px',
  marginLeft: '5px',
  marginRight: '5px'
};

var PetComponent = function(props) {
  return (
    <div style={comStyle}>
      <h3>{props.petName} Likes: {props.likesCount}</h3>
      <img style={{height: 400, width:400}} src={props.petImageUrl} alt={"Cute " + props.petName}/>
      <br />
      <button style={btnStyle} value={props.petName} onClick={props.onLikeBtnClick}>Like</button>
      <button style={btnStyle} value={props.petName} onClick={props.onDislikeBtnClick}>Dislike</button>
    </div>
  );  
}

module.exports = PetComponent;

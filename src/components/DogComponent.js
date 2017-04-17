var React = require('react');

class DogComponent extends React.Component {
  render() {
    return (
      <div style={comStyle}>
        <h3>Dog Component</h3>
        <img style={{height: 400, width:400}} src="https://s-media-cache-ak0.pinimg.com/originals/5e/0b/13/5e0b1350965d186b299cdd457a32aa50.jpg" alt="Cute Dog"/>
        <br />
        <button style={btnStyle}>Like</button>
        <button style={btnStyle}>Dislike</button>        
      </div>
    );
  }
}

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

module.exports = DogComponent;

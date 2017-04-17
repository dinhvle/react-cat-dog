var React = require('react');

class CatComponent extends React.Component {
  render() {
    return (
      <div style={comStyle}>
        <h3>Cat Component</h3>
        <img style={{height: 400, width:400}} src="https://i.redd.it/qh713wbo4r8y.jpg" alt="Cute Cat"/>
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

module.exports = CatComponent;

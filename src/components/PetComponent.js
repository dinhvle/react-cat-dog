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

class CatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
  }
  handleLikeBtnClick() {
    console.log(this.props.petName + ' Component like button clicked')
  }

  handleDislikeBtnClick() {
    console.log(this.props.petName + ' Component dislike button clicked')
  }

  render() {
    return (
      <div style={comStyle}>
        <h3>{this.props.petName} Component</h3>
        <img style={{height: 400, width:400}} src={this.props.petImageUrl} alt={"Cute " + this.props.petName}/>
        <br />
        <button style={btnStyle} onClick={this.handleLikeBtnClick}>Like</button>
        <button style={btnStyle} onClick={this.handleDislikeBtnClick}>Dislike</button>
      </div>
    );
  }
}

module.exports = CatComponent;

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

class PetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesCount: 0
    };
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
  }
  handleLikeBtnClick() {
    this.setState(function(prevState) {
      return {
        likesCount: prevState.likesCount + 1
      }
    });
  }
  handleDislikeBtnClick() {
    this.setState(function(prevState) {
      return {
        likesCount: prevState.likesCount - 1
      }
    });
  }

  render() {
    console.log('Inside render method: ', this.state.likesCount);
    return (
      <div style={comStyle}>
        <h3>{this.props.petName} Likes: {this.state.likesCount}</h3>
        <img style={{height: 400, width:400}} src={this.props.petImageUrl} alt={"Cute " + this.props.petName}/>
        <br />
        <button style={btnStyle} onClick={this.handleLikeBtnClick}>Like</button>
        <button style={btnStyle} onClick={this.handleDislikeBtnClick}>Dislike</button>
      </div>
    );
  }
}

module.exports = PetComponent;

var React = require('react');
var PetComponent = require('./PetComponent');

var style = {
  textAlign: 'center',
  fontSize: '2em',
  color: 'rebeccapurple'
};

var btnStyle = {
  marginTop: '30px',
  marginRight: '5px',
  height: '25px'
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catLikesCount: 0,
      dogLikesCount: 0
    };
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);    
  }
  handleLikeBtnClick(event) {
    var petName = event.target.value;

    if (petName === 'Cat') {
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount + 1,
          dogLikesCount: prevState.dogLikesCount
        }
      })
    } else if (petName === 'Dog') {
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount,
          dogLikesCount: prevState.dogLikesCount + 1
        }
      })
    }
  }
  handleDislikeBtnClick(event) {
    var petName = event.target.value;

    if (petName === 'Cat') {
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount - 1,
          dogLikesCount: prevState.dogLikesCount
        }
      })
    } else if (petName === 'Dog') {
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount,
          dogLikesCount: prevState.dogLikesCount - 1
        }
      })
    }
  }  
  handleShowWinnerBtnClick() {
    var catLikesCount = this.state.catLikesCount;
    var dogLikesCount = this.state.dogLikesCount;
    
    if (catLikesCount > dogLikesCount) {
      console.log('Cat is the Winner');
    } else if (catLikesCount < dogLikesCount) {
      console.log('Dog is the Winner');
    } else {
      console.log('It\'s a tie');
    }
  }
  handleStartOverBtnClick() {
    
  }
  render() {
    return (
      <div>
        <h1 style={style}>
          Welcome to Cat and Dog Cuteness Fight Game!!!
        </h1>
        <div style={{marginTop: 60, textAlign: 'center'}}>
          <PetComponent
            petName="Cat"
            likesCount={this.state.catLikesCount}
            petImageUrl="https://i.redd.it/qh713wbo4r8y.jpg"
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
          />
          <PetComponent
            petName="Dog"
            likesCount={this.state.dogLikesCount}
            petImageUrl="https://s-media-cache-ak0.pinimg.com/originals/5e/0b/13/5e0b1350965d186b299cdd457a32aa50.jpg"
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
          />
        </div>
        <div style={{textAlign: 'center'}}>
          <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>
          <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Over</button>
        </div>
      </div>
    );    
  }
}

module.exports = HomePage;

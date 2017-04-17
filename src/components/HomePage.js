var React = require('react');
var PetComponent = require('./PetComponent');

var style = {
  textAlign: 'center',
  fontSize: '2em',
  color: 'rebeccapurple'
};

var HomePage = function() {
  return (
    <div>
      <h1 style={style}>
        Welcome to Cat and Dog Cuteness Fight Game!!!
      </h1>
      <div style={{marginTop: 60, textAlign: 'center'}}>
        <PetComponent
          petName="Cat"
          petImageUrl="https://i.redd.it/qh713wbo4r8y.jpg"
        />
        <PetComponent
          petName="Dog"
          petImageUrl="https://s-media-cache-ak0.pinimg.com/originals/5e/0b/13/5e0b1350965d186b299cdd457a32aa50.jpg"
        />
      </div>
    </div>
  );
};

module.exports = HomePage;

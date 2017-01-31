const React = require('react');
const FillerText = require('./FillerText.js');

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

module.exports = Webpage;

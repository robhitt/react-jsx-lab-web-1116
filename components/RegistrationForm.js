const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="id1" value="id1"> </input>
        <input type="password" name="id2" value="id2"> </input>
        <button type="submit"> </button>
      </form>
    )
  }
}

module.exports = RegistrationForm;

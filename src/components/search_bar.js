import React, {Component} from 'react'


class SearchBar extends Component {
 constructor(props) {
  super(props);

  this.state = {
    input_term : ''
  }
 }

  render() {
    return (
      <div> 
        <input 
         onChange={ e => this.setState({ input_term : e.target.value })}/>
      </div>
    )
  }
 

}

export default SearchBar;
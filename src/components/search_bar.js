import React, {Component} from 'react'


class SearchBar extends Component {
 constructor(props) {
  super(props);

  this.state = {
    term : ''
  }
 }

  render() {
    return (
      <div className="search-bar"> 
        <div className="col-lg-8 col-sm-8">
            <div className="input-group">
               <input className='form-control' onChange={event => this.onInputChange(event.target.value)} placeholder="Search for..." aria-label="Search for..."/>
            </div>
          </div>
      </div>
    )
  }
 
  onInputChange(term){
    this.setState({term : term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
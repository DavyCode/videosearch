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
               <input className='form-control' onChange={ e => this.setState({ term : e.target.value })} placeholder="Search for..." aria-label="Search for..."/>
               <span clasName="input-group-btn">
                <button className="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
      </div>
    )
  }
 

}

export default SearchBar;
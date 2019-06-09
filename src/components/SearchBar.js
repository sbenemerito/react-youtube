import React from 'react';

class SearchBar extends React.Component {
  state = {
    keyword: null
  };

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={(e) => this.submitSearch(e)}>
          <input onChange={(e) => this.handleUpdate(e)} type='text' name='keyword' id='keyword' />
          <button type='submit'>Submit</button>
        </form>
        <small>You can press <i>Enter</i> instead of clicking <i>Submit</i></small>
      </div>
    );
  }

  handleUpdate(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitSearch(e) {
    e.preventDefault();
    this.props.searchFn(this.state.keyword);
  }
}

export default SearchBar;
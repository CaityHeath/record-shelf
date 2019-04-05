import React from 'react';
import superagent from 'superagent'
//import When from './when.js';


class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dataBody: {}
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    let url = 'https://recordshelf-backend.herokuapp.com';
    let searchQuery = e.target.inputSearch.value;
    console.log(' 💿 search query 📀 ', searchQuery);
    let data = await superagent.get(`${url}/search`).query({ artist: searchQuery });

    this.setState({ dataBody: data.body });
    console.log(this.state.dataBody);
  }

  render(){
    return (
  
      <main>

        <form onSubmit={this.handleSubmit} id='search-form'>
          <label htmlFor='search'> Search for an Artist </label>
          <input type='text' name='search' id='inputSearch' />
          <button> Search </button>
        </form>

      </main>
    

    )
  }

}

export default Search;
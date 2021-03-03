
import './App.css';
import React,{ Component } from 'react';
import PokeList from '../components/PokeList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      pokemons: [],
      pokemonDetails: [], 
      searchfield: '',  
    }
  }
  
  componentDidMount(){
    this.grabPokemon(); 
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
  }


  render(){
    const {pokemonDetails, searchfield} = this.state;
    const filteredPokemon = pokemonDetails.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    

    return (
      <div className='tc'>
        
          <h1 className='f1'>PokeDex</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <PokeList pokemon= {filteredPokemon}/>
            </ErrorBoundry>
            
          </Scroll>
      </div>
    );
  }
  
  grabPokemon(){
      let url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({pokemons: data.results}, () => {

          this.state.pokemons.map(poke => {
            fetch(poke.url)
            .then(resp=> resp.json())
            .then(data => {
              this.setState((prevState) => ({ pokemonDetails: [ ...prevState.pokemonDetails, data]}));
            })
          })
        })
      })
    }
  
  
  
  
}

export default App;

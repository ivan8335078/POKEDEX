import { Component } from 'react'
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            img: ''
        }
    }
      traerDatos = async () => {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await respuesta.json();
        console.log(data);

        this.setState({
          img: data.sprites.front_default,
        })
      }
    handleName= (event) => {
      let aux = event.target.value.toLowerCase();
      console.log(event.target.value.toLowerCase());
      this.setState({
          name: aux
      })
    }
    handleSubmit = (event) => {
      let name = this.state.name;
      console.log(name);
      event.preventDefault();
      this.traerDatos();
    }
  render() {
    if(this.state.img === ''){
    return (
      <div className='card'>
          <div className='card-header text-light bg-secondary'>
            Busca tu pokemon
          </div>
          <div className='card-body bg-danger'>
              <form>
              <label className='texte-black'>Ingresa el nombre de tu pokemon</label><br />
              <input type="text" 
              placeholder='Nombre pokemon'
              onChange={this.handleName}
              /><br />
              <button className='btn btn-dark'
              type='submit'
              onClick={this.handleSubmit}>Buscar</button>
              </form>
          </div>
      </div>
    )}else {
      return(
        <div className='card' style={{width: '18rem'}}>
            <div className='card-header text-black'>
              {this.state.name}
            </div>
            <div className='card-body'>
              <img src={this.state.img} alt={this.state.name}></img>
              <br />
              <button className='btn btn-primary' onClick={() => {this.setState({ name: '', img: ''})}}>Regresar</button>
            </div>
        </div>
      )}
  }
}

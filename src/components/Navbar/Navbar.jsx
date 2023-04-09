import { Component } from 'react'
export default class Navbar extends Component {
    constructor(porps){
      super(porps)
      this.state = {
        title: 'Pokedex'
      }
    }
  render() {
    return (
      <div>
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">{this.props.name}</a>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}         

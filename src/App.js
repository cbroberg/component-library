import React, { Component } from 'react'

import { Button, Button2 } from 'components/components'

import Starwars from 'components/Starwars'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>New button 1</Button>
        <Button2>New button 2</Button2>
        <Starwars />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import 'isomorphic-fetch'

class Starwars extends Component {

constructor(props) {
    super(props)
    this.fetchPeople.bind(this)
}

    // componentWillMount() {
    //     const res = await fetch('//swapi.co/api/people/')
    //     const json = await res.json()
    //     people = json.results
    //     return { characters: json.results }
        
    // }
   
    async fetchPeople() {
        const res = await fetch('//swapi.co/api/people/')
        const json = await res.json()
        console.log(json.results)
        return { characters: json.results }
    }
    render () {
        this.fetchPeople()
        console.log(this.props.characters)
        return (
            <div>                
                <ul>
                    {this.props.characters.map((person) => (
                        <li key={person.name}>{person.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

Starwars.defaultProps = {
    characters: []
}

Starwars.propTypes = {
    characters: PropTypes.array
}

export default Starwars
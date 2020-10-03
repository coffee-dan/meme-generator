import React from 'react'
/**
 * MemeGenerator will be calling to an API and holding on to data
 * thus it is a stateful class component
 */


class MemeGenerator extends React.Component {
    constructor(){
        super()

        this.state = {
            // Variables for assisting in API call
            retrievedData: {},
            loading: true
        }
    }

    componentDidMount(){
        // This is where an API call will be made
    }
    
    render(){
        return (
            <h1>Hello world! I am MemeGenerator</h1>
        )
    }
}

export default MemeGenerator
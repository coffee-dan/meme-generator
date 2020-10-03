import React from 'react'
/**
 * MemeGenerator will be calling to an API and holding on to data
 * thus it is a stateful class component
 * 
 * API in use is https://api.imgflip.com/ and the data being saved is
 * ('response.data.memes') to the state property 'allMemeImgs'
 */


class MemeGenerator extends React.Component {
    constructor(){
        super()

        this.state = {
            // Variables for assisting in API call
            allMemeImgs: {},
            loading: true,
            topText: "when you",
            bottomText: "you generate memes",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
    }

    componentDidMount(){
        // Fetching array of meme images with associated data
        this.setState({ loading: true })
        const APILink = "https://api.imgflip.com/get_memes"
        fetch(APILink)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    allMemeImgs: res.data.memes,
                    loading: false 
                })
            })
    }
    
    render(){
        return (
            <h1>Meme Generator section</h1>
        )
    }
}

export default MemeGenerator
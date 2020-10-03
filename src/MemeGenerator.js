import React from 'react'
/**
 * MemeGenerator will be calling to an API and holding on to data
 * thus it is a stateful class component
 * 
 * API in use is https://api.imgflip.com/ and the data being saved is
 * ('response.data.memes') to the state property 'allMemeImgs'
 * 
 * MemeGenerator uses React "controlled forms" to allow users to input the
 * top and bottom text
 */


class MemeGenerator extends React.Component {
    constructor(){
        super()

        this.state = {
            // Variables for assisting in API call
            allMemeImgs: [],
            loading: true,
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }

        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        // Fetching array of meme images with associated data
        this.setState({ loading: true })
        const APILink = "https://api.imgflip.com/get_memes"
        fetch(APILink)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    allMemeImgs: response.data.memes,
                    loading: false 
                })
            })
    }

    onChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        value={this.state.topText}
                        name="topText"
                        placeholder="Top Text"
                        onChange={this.onChange}
                    />
                    <input 
                        type="text"
                        value={this.state.bottomText}
                        name="bottomText"
                        placeholder="Bottom Text"
                        onChange={this.onChange}
                    />
                    <button>Generate</button>
                </form>
                <p>Check it: {this.state.topText} {this.state.bottomText}</p>
            </div>
        )
    }
}

export default MemeGenerator
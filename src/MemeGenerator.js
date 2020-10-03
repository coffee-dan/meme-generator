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

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        // Fetching array of meme images with associated data
        this.setState({ loading: true })
        const APILink = "https://api.imgflip.com/get_memes"
        fetch(APILink)
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes,
                    loading: false 
                })
                console.log(memes)
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const newImg = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: newImg
        })
    }

    render(){
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.topText}
                        name="topText"
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        value={this.state.bottomText}
                        name="bottomText"
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="Meme" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
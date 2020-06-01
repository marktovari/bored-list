import React, { Component } from 'react'

export class More extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         message:''
    //     };
        
    //     this.onChange = this.onChange.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    // onSubmit(e) {
    //     e.preventDefault();
    //     console.log(this.state.message)
    // }

    render() {
        return (
            <div className="articlebox more">
                <div>
                    <h1>
                        Didn't find what you were looking for?
                    </h1>
                    We are sorry. Why not check back later? 
                    This website is still being worked on. New content on the 5th of June.
                    <br/>
                    We ask you to help us out a bit though. 
                    If you find us worthy,
                    just click the button proving that you were here, and that putting effort into the development of this site is worth it.
                    <br/>
                </div>
                {/* <div>
                    <form>
                        <label>Message:</label>
                        <textarea name="message" onChange={this.onChange} value={this.props.message}></textarea>
                        <button onClick={this.onSubmit}>I was here</button>
                    </form>
                </div> */}
            </div>
        )
    }
}

export default More
import React , {Component} from "react";

export default class Home extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="bg-holder">
                <div className ="jumbotron vertical-align">
                    <div className="container black-text">
                    <h1 class="display-5">Welcome, Students!</h1>
                            <hr class="my-4"/>
                            <p>To start learning, Click the Register Button to upload your Student Porfolio.</p>
                            <p class="lead">
                                <a class="btn btn-primary btn-lg" href="/register" role="button">Register</a>
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}

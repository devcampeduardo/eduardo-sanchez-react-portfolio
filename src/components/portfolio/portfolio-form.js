import React, { Component } from "react";
import axios from "axios";  


export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            description:"",
            categoty:"eCommerce",
            position:"",
            url:"",
            thumb_image:"",
            banner_image:"",
            logo:""

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    buildForm() {
        let formData = new FormData();

        formData.append("porfolio_item[name]", this.state.name);
        formData.append("porfolio_item[description]", this.state.description);
        formData.append("porfolio_item[url]", this.state.url);
        formData.append("porfolio_item[category]", this.state.categoty);
        formData.append("porfolio_item[position]", this.state.position);
        
        return formData;
    }

    handleChange(event) {
        this.setState ({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

     axios
        .post(
          "https://eduardosanchez.devcamp.space/portfolio/portfolio_items",
          this.buildForm(),
          { withCredentials: true}
        )
        .then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
            console.log("response", response);
          })
        .catch(error => {
            console.log("portfolio form handleSubmit error", error);
        })
      
        event.preventDefault();
      }
        
    render() {
        return (
            <div>
                <h1>Portfolio Form</h1>
                

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                            type= "text"
                            name="name"
                            placeholder="Portfolio Item Name"
                            value={this.state.name}
                            onChange={this.handChange}
                            />

                            <input 
                            type= "text"
                            name="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.handChange}
                            />
                            
                        <div>
                            <input 
                            type= "text"
                            name="position"
                            placeholder="Position"
                            value={this.state.position}
                            onChange={this.handChange}
                            />

                            <select 
                            name="category"
                            value={this.state.categoty}
                            onChange={this.handChange}
                            >
                                <option value = "eCommerce">eCommerce</option>
                                <option value = "Scheduling">Scheduling</option>
                                <option value = "Enterprise">Enterprise</option>
                            </select>
                        </div>

                        <div>
                            <textarea 
                            type= "text"
                            name="description"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.handChange}
                            />
                        </div>

                        <div>
                        <button type= "submit">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
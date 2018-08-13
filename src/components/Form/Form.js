import React, { Component } from "react";
import axios from "axios";
import MyForm from "./MyForm";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBjbGlja2FwcHMuY28iLCJpYXQiOjE1MzQxNjMwOTIsImV4cCI6MTUzNjc1NTA5Mn0.BAdumPzPtv1MlCR82AJjQiCEAfoVmxmb2Y7QZSlXMUA";

class Form extends Component {
  handleOnSubmit = values => {
    axios({
      url: "http://api.iw.dev.clicksandbox.com/v1/companies/640",
      method: "PUT",
      data: values,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token
      }
    })
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
  };

  render() {
    return (
      <div>
        <MyForm onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default Form;

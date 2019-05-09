import React, { Component } from 'react';
import firebase from '../Firebase';
//import { Link } from 'react-router-dom';

class AddProduct extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      productImages: []
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  handlerImages = e => {
    const _imageType = e.target.name;
    const _extraImages = [...this.state.productImages];
    const _length = e.target.files.length;

    for (var x = 0; x < _length; x++) {
      const _imgType = e.target.files[x].type;
      const _ext = _imgType.split("/")[1].toLowerCase();
      if (_ext === "jpg" || _ext === "jpeg" || _ext === "png" || _ext === "gif") {
        const files = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(files[x]);
        reader.onload = e => {
          _extraImages.push({
            imageurl: reader.result,
            type: _imageType
          });
          this.setState({ productImages: _extraImages });
        }
      }
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, productImages } = this.state;
    console.log(this.state);
    this.ref.add({
      title,
      description,
      productImages
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        productImages:[]
      });
      //this.props.history.push("/")
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }


  render() {
    const _state = this.state;
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h5>Add Product</h5>
          </div>
          <form>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group row">
                    <label className="col-md-2 text-right">Name </label>
                    <div className="col-md-8">
                      <input type="text"
                        className="form-control"
                        name="title"
                        value={_state.title}
                        onChange={this.onChange}
                        placeholder="Name" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-2 text-right">Small Discription</label>
                    <div className="col-md-8">
                      <textarea className="form-control"
                        name="description"
                        value={_state.description}
                        onChange={this.onChange}
                        id="exampleTextarea" rows="3"></textarea>
                    </div>
                  </div>
                  <div className="form-group row"><label className="col-md-2 text-right">Main Image</label>
                    <div className="col-md-8">
                      <div className="product-img mb-2">
                        <div className="form-inline ">
                          <div className="form-group">
                            <input type="file" name="main" onChange={this.handlerImages} required="" className="form-control-file" />
                          </div>
                        </div>
                        <ul className="list-inline mt-2">
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-2 text-right">Extra Images</label>
                    <div className="col-md-8">
                      <div className="product-img mb-2">
                        <div className="form-inline ">
                          <div className="form-group">
                            <input type="file" name="extra" onChange={this.handlerImages} className="form-control-file" multiple="" />
                          </div>
                        </div>
                        <ul className="list-inline mt-2"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-right">
              <button onClick={this.onSubmit} className="btn btn-primary">Add Product</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default AddProduct;
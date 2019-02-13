import React from "react";
import CATEGORIES from "../../constants/index";
import Input from "../Input";
import Description from "../Description";
import Select from "../Select";
import Button from "../Button";
import './EditAdvertForm.css';

export default class EditAdvertForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.advert.title || "",
      description: props.advert.description || "",
      category: props.advert.category || "",
      author: props.advert.author || {},
      price: props.advert.price || ""
    };
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });


  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  handleAuthorChange = e => {
    this.setState({ author: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.updateAdvert(this.props.advert._id, this.state);
  };

  render() {
    console.log(this.props.advert.author);
    const { users } = this.props;
    const { title, description, category, price, author } = this.state;
    return (
      <div>
        <form className="EditAdvertForm">
          <h5 className="EditAdvertForm-title">Edit Advert</h5>
          <Input
            name="title"
            type="text"
            onChange={this.handleChange}
            placeholder="title"
            value={title}
          />
          <Description
            name="description"
            onChange={this.handleChange}
            placeholder="description"
            value={description}
          />
          <Select value={category} onChange={this.handleCategoryChange}>
            {CATEGORIES.map((cat, index) => {
              return <option key={index}>{cat}</option>;
            })}
          </Select>
          <Select value={author._id} onChange={this.handleAuthorChange}>
            {users.map((user, index) => {
              return (
                <option key={index} value={user._id}>
                  {user.username}
                </option>
              );
            })}
          </Select>
          <Input
            name="price"
            type="text"
            onChange={this.handleChange}
            placeholder="price"
            value={price}
          />
          <Button onClick={this.onSubmit}>SUBMIT</Button>
        </form>
      </div>
    );
  }
}

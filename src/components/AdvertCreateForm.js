import React from "react";
import CATEGORIES from "../constants";
import faker from 'faker';

let content = null;

class AdvertCreateForm extends React.Component {
  state = {
    title: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    category: "",
    author: "",
    price: faker.commerce.price()
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
    this.props.setAdvert(this.state);
    if (this.props.advert) {
      content = <div>Advert successfully created:)</div>;
    }
  };

  render() {
    const { users } = this.props;
    const { title, description, category, price, author } = this.state;
    return (
      <div>
        <form className="filter">
          <h5>Create Advert</h5>
          <input
            name="title"
            type="text"
            className="search_field"
            onChange={this.handleChange}
            placeholder="title"
            value={title}
          />
          <textarea
            name="description"
            className="search_field"
            onChange={this.handleChange}
            placeholder="description"
            value={description}
          />
          <select value={category} onChange={this.handleCategoryChange}>
            {CATEGORIES.map((cat, index) => {
              return <option key={index}>{cat}</option>;
            })}
          </select>
          <select value={author} onChange={this.handleAuthorChange}>
            {users.map((user, index) => {
              return (
                <option key={index} value={user._id}>
                  {user.username}
                </option>
              );
            })}
          </select>
          <input
            name="price"
            type="text"
            className="search_field"
            onChange={this.handleChange}
            placeholder="price"
            value={price}
          />
          <button className="add__btn" onClick={this.onSubmit}>
            SUBMIT
          </button>
        </form>
        {content}
      </div>
    );
  }
}

export { AdvertCreateForm };

import React from 'react';
import CATEGORIES from '../constants';

class SearchForm extends React.Component {
  state = {};

  handleTitleChange = (e) => {
    this.setState({title: e.currentTarget.value});
  };

  handleDescription = (e) => {
    this.setState({description: e.currentTarget.value});
  };

  handleCategory = (e) => {
    this.setState({category: e.target.value})
  };

  handleSort = (e) => {
    if(this.state.decs) {
      this.setState({sort: `-${e.target.value}`});
    } else {
      this.setState({sort: e.target.value});
    }

  };

  handleDecsSort = (e) => { // обработчик кликов по чекбоксу
    // чтобы установить true/false считываем свойство checked
    if(!this.state.decs) {
      this.setState({sort: `-${this.state.sort}`});
    }

    this.setState({ decs: e.currentTarget.checked});

    if(this.state.sort && this.state.decs === false && this.state.sort.indexOf('-') !== 0) {
      this.setState({sort: `-${this.state.sort}`});
    } else if (this.state.decs === true && this.state.sort.indexOf('-') === 0) {
      this.setState({sort: this.state.sort.slice(1)});
    }

  };

  onSubmit = e => {
    e.preventDefault();
    delete this.state.decs;
    this.props.getAdverts(this.state);
  };

  render() {
    const {title, category, description, sort} = this.state;
    return (
        <form className="filter">
          <h5>Search params</h5>
          <input
            id="title"
            type="text"
            onChange={this.handleTitleChange}
            className="search_field"
            placeholder="Title"
            value={title}
          />
          <textarea
            id="description"
            onChange={this.handleDescription}
            className="search_field"
            placeholder="Description"
            value={description}
          />
          <select value={category} onChange={this.handleCategory}>
            {CATEGORIES.map((cat, index) => {
              return (<option key={index}>{cat}</option>)
            })}
          </select>
          <p>Sort by:</p>
          <select value={sort} onChange={this.handleSort}>
            <option value='created'>Created date</option>
            <option value='modified'>Modified date</option>
            <option value='price'>Price</option>
          </select>
          <label className="checkrule">
            <input type="checkbox" onChange={this.handleDecsSort}/>
            descending
          </label>
          <button
            className="add__btn"
            onClick={this.onSubmit}
          >
            SHOW
          </button>
        </form>
    )
  }
}

export {SearchForm}
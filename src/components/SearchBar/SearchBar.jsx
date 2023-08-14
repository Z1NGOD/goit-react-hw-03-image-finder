import React, { Component } from 'react';
import { Header, Form, Input, Button } from './Searchbar.styled';

export default class SearchBar extends Component {
  state = {
    searchQuery: this.props.searchQuery,
  };

  handleSearch = e => {
    const normalizedQuery = e.currentTarget.value.trim().toLowerCase();
    this.setState({
      searchQuery: normalizedQuery,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.onSearchQueryChange(this.state.searchQuery);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleSearch}
          />
          <Button>Search</Button>
        </Form>
      </Header>
    );
  }
}

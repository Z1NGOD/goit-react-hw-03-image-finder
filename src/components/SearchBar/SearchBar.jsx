import React, { Component } from 'react';
import { Header, Form, Input, Button } from './Searchbar.styled';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };
  handleSearch = e => {
    const normalizedQuery = e.currentTarget.value.trim().toLowerCase();
    this.setState({
      searchQuery: normalizedQuery,
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const query = this.state.searchQuery;
    this.props.fetchImages(query);
    this.setState({ searchQuery: '' });
  };
  
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
          />
          <Button>Search</Button>
        </Form>
      </Header>
    );
  }
}

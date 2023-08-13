import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import getProducts from 'api/Products';
import { Button } from 'ui/Button/Button.styled';
import { Container } from 'ui/Container.styled';
export class App extends Component {
  state = {
    images: [],
    page: 1,
    per_page: 12,
    totalHits: 0,
    searchQuery: '',
  };
  
 async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({
        
        page: 1,
      });
    }
    if (prevState.page !== this.state.page) {
      this.fetchImages(this.state.searchQuery);
    }
  }

  fetchImages = async query => {
    const { hits, totalHits } = await getProducts({
      query,
      page: this.state.page,
      per_page: this.state.per_page,
    });
    this.setState(prevState => ({
      images: [...prevState.images, ...hits],
      totalHits,
      searchQuery: query,
    }));
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { images, totalHits } = this.state;
    return (
      <>
        <SearchBar
          searchQuery={this.state.searchQuery}
          fetchImages={this.fetchImages}
        />
        <ImageGallery images={images} />
        <Container>
          {totalHits === 0 ? null : (
            <Button onClick={this.loadMoreImages}>Load more</Button>
          )}
        </Container>
      </>
    );
  }
}

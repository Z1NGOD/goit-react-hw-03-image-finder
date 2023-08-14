import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import getProducts from 'api/Products';
import { Button } from 'ui/Button/Button.styled';
import { Container } from 'ui/Container.styled';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    per_page: 12,
    totalHits: 0,
    searchQuery: '',
    loading: false,
    selectedImageUrl: '',
    isModalOpen: false,
  };

  handleSearchQueryChange = newQuery => {
    this.setState(
      {
        searchQuery: newQuery,
        images: [],
        page: 1,
        totalHits: 0,
        loading: true,
      },
      () => {
        this.fetchImages();
      }
    );
  };

  fetchImages = async () => {
    const { searchQuery, page, per_page } = this.state;
    const { hits, totalHits } = await getProducts({
      query: searchQuery,
      page,
      per_page,
    });

    this.setState(
      prevState => ({
        images: [...prevState.images, ...hits],
        totalHits,
      }),
      () => {
        this.setState({ loading: false });
      }
    );
  };

  loadMoreImages = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        loading: true,
      }),
      () => {
        this.fetchImages();
      }
    );
  };
  openModal = selectedImageUrl => {
    this.setState({ selectedImageUrl, isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleLoadMoreShower = () => {
    const { totalHits, page, per_page } = this.state;
    const totalPages = Math.ceil(totalHits / per_page);
    return totalHits > 0 && page < totalPages;
  };

  render() {
    const { images, searchQuery } = this.state;
    return (
      <>
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={this.handleSearchQueryChange}
        />
        <ImageGallery images={images} openModal={this.openModal} />
        <Container>
          {this.state.loading && <Loader />}
          {this.handleLoadMoreShower() && (
            <Button onClick={this.loadMoreImages}>Load more</Button>
          )}
          {this.state.isModalOpen && (
            <Modal
              imageUrl={this.state.selectedImageUrl}
              closeModal={this.closeModal}
            />
          )}
        </Container>
      </>
    );
  }
}

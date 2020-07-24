import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Heading,
  Slider,
  Slide,
  SlideBg,
  SlideContent,
  SlideTitle,
  SlideSubtitle,
} from './styled';

import {
  Grid,
  Button,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  CircularProgress,
  LinearProgress,
  Typography,
} from '@material-ui/core';

import ProductModal from '../ProductModal';
import Wrapper from '../Wrapper';

import { Modal } from './styled';

import slice, * as actions from '../../modules/product';

const selectors = state => ({
  products: state.product.popular.list,
  isLoading: state.product.popular.isLoading,
});

const ProductsSlider = props => {
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { products, isLoading } = useSelector(selectors);

  const fetchProducts = useCallback(() => dispatch(actions.fetchPopular()));

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = product => {
    setTimeout(() => {
      setSelectedProduct(product);
    }, 700);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <Wrapper gutterTop={64}>
      <ProductModal
        product={selectedProduct}
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
      />
      <Heading>Popular</Heading>
      {!isLoading ? (
        <Container>
          {products.map(product => (
            <Slide onClick={() => openModal(product)}>
              <SlideBg />
              <SlideContent>
                <SlideTitle>{product.name}</SlideTitle>
                <SlideSubtitle>
                  {product.ingredients || 'Cheese, Dough, Pepperoni'}
                </SlideSubtitle>
                {/* <Rating></Rating> */}
              </SlideContent>
            </Slide>
          ))}
        </Container>
      ) : (
        <LinearProgress />
      )}
    </Wrapper>
  );
};

export default ProductsSlider;

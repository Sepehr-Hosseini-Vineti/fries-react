import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Heading, Slider, Slide, SlideBg, SlideContent, SlideTitle, SlideSubtitle } from './styled';

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

import { fetchProducts } from '../../api';

const ProductsSlider = (props) => {
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateProducts = async () => {
    const {
      data: { products },
    } = await fetchProducts();
    setProducts(products);
  };

  useEffect(() => {
    updateProducts();
  }, []);

  const openModal = (product) => {
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
      <ProductModal product={selectedProduct} isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
      <Heading>Popular</Heading>
      {!!products ? (
        <Container>
          {products.map((product) => (
            <Slide onClick={() => openModal(product)}>
              <SlideBg />
              <SlideContent>
                <SlideTitle>{product.name}</SlideTitle>
                <SlideSubtitle>{product.ingredients || 'Cheese, Dough, Pepperoni'}</SlideSubtitle>
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

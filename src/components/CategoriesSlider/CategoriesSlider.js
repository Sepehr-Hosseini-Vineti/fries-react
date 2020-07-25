import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import { LinearProgress } from '@material-ui/core';

import Wrapper from '../Wrapper';

import slice, * as actions from '../../modules/category';

import { Slide, SlideBg } from './styled';

const styles = {
  wrapper: {
    padding: '2rem 0',
  },
  heading: {
    marginBottom: 16,
    paddingLeft: 32,
    fontWeight: 900,
    fontSize: 22,
  },
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    overflowX: 'auto',

    padding: '4px 0',
  },
  content: {
    position: 'relative',
  },
  title: {
    fontSize: 22,
    fontWeight: 900,
    color: 'var(--title-color)',
    wordBreak: 'break-all',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 700,
    color: 'var(--subtitle-color)',
    marginBottom: 5,
  },
};

const imageOptions = { resize: '300x300' };
const toQuery = obj =>
  Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');

const selectors = state => ({
  categories: state.category.list,
  isLoading: state.category.isLoading,
  selectedCategoryId: state.category.selectedCategoryId,
});

function CategoriesSlider() {
  const dispatch = useDispatch();
  const { categories, isLoading, selectedCategoryId } = useSelector(selectors);

  const fetchCategories = useCallback(
    () => dispatch(actions.fetchCategories()),
    [dispatch]
  );
  const selectCategory = useCallback(id =>
    dispatch(actions.selectCategory(id))
  );

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const onCategoryClick = category => {
    selectCategory(category.id);
  };

  return (
    <Wrapper gutterTop={32}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          <div style={styles.heading}>Categories</div>
          <div style={styles.container}>
            {categories.map(category => (
              <Slide
                style={styles.slide}
                onClick={() => onCategoryClick(category)}
                active={selectedCategoryId === category.id}
                key={category.id}
              >
                <SlideBg
                  image={`${category.images[0]}?${toQuery(imageOptions)}`}
                />
                <div style={styles.content}>
                  <div style={styles.subtitle}>
                    {category.productsCount} items
                  </div>
                  <div style={styles.title}>{category.name}</div>
                </div>
              </Slide>
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default CategoriesSlider;

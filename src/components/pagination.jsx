import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = props => {
  const { itemsCount, pageSize } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label='Page navigation example'>
      <ul class='pagination'>
        {pages.map(page => (
          <li key={page} class='page-item'>
            <a class='page-link' href='#'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

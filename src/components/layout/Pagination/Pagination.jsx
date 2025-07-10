import ReactPaginate from 'react-paginate';

import styles from './pagination.module.css';

function PaginatedItems({ handleClick, count, page }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="&#8250;"
      onPageChange={handleClick}
      forcePage={page - 1}
      pageRangeDisplayed={5}
      pageCount={count}
      previousLabel="&#8249;"
      renderOnZeroPageCount={false}
      containerClassName={styles.pagination__container}
      disabledClassName={styles.pagination__disabled}
      pageLinkClassName={styles.pagination__item}
      previousLinkClassName={styles.pagination__arrow}
      nextLinkClassName={styles.pagination__arrow}
      activeLinkClassName={styles['pagination__item--active']}
    />
  );
}

export default PaginatedItems;

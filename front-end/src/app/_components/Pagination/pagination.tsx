// Pagination.tsx
import React from 'react';
import * as S from './pagination.css'; // 파일 경로에 맞게 수정

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange, totalItems }) => {
  const limit = 10;
  const totalPages = Math.ceil(totalItems / limit);
  //   console.log('now',currentPage)
  //   console.log("ddd",totalPages)
  const handleFirstPage = () => {
    onPageChange(0);
  };

  const handleLastPage = () => {
    onPageChange(totalPages - 1);
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      onPageChange(prevPage);
    }
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage < totalPages) {
      onPageChange(nextPage);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const generatePageNumbers = () => {
    const pageNumbers: number[] = [];
    const groupSize = 5;

    const groupIndex = Math.floor(currentPage / groupSize);
    const startPage = groupIndex * groupSize;
    const endPage = Math.min(startPage + groupSize, totalPages);

    for (let i = startPage; i < endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className={S.paginationContainer}>
      <button className={S.paginationFirstLastButton} onClick={handleFirstPage} disabled={currentPage === 0}>
        맨앞
      </button>
      <button className={S.paginationPreviousNextButton} onClick={handlePrevPage} disabled={currentPage === 0}>
        이전
      </button>
      {generatePageNumbers().map(number => (
        <button
          key={number}
          className={currentPage === number ? S.paginationActiveButton : S.paginationButton}
          onClick={() => handlePageClick(number)}
        >
          {number + 1}
        </button>
      ))}
      <button
        className={S.paginationPreviousNextButton}
        onClick={handleNextPage}
        disabled={currentPage === totalPages - 1}
      >
        다음
      </button>
      <button
        className={S.paginationFirstLastButton}
        onClick={handleLastPage}
        disabled={currentPage === totalPages - 1}
      >
        맨뒤
      </button>
    </div>
  );
};

export default Pagination;

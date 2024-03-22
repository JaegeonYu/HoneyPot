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
  const totalPages = Math.ceil(totalItems / limit) - 1;

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const generatePageNumbers = () => {
    const pageNumbers: number[] = [];
    const groupSize = 5;

    const groupIndex = Math.floor((currentPage - 1) / groupSize);
    const startPage = groupIndex * groupSize + 1;
    const endPage = Math.min(startPage + groupSize - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className={S.paginationContainer}>
      <button className={S.paginationFirstLastButton} onClick={handleFirstPage} disabled={currentPage === 1}>
        맨앞
      </button>
      <button className={S.paginationPreviousNextButton} onClick={handlePrevPage} disabled={currentPage === 1}>
        이전
      </button>
      {generatePageNumbers().map(number => (
        <button
          key={number}
          className={currentPage === number ? S.paginationActiveButton : S.paginationButton}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </button>
      ))}
      <button className={S.paginationPreviousNextButton} onClick={handleNextPage} disabled={currentPage === totalPages}>
        다음
      </button>
      <button className={S.paginationFirstLastButton} onClick={handleLastPage} disabled={currentPage === totalPages}>
        맨뒤
      </button>
    </div>
  );
};

export default Pagination;

import React from 'react';
import * as T from '@/types';
import * as S from './SearchInput.css';
import { SearchIcon } from '@/_assets/icon';

export default function SearchInput({ inputId, onChange, value, placeholder }: T.SearchInputProps) {
  return (
    <label htmlFor={inputId} className={S.styledLabel}>
      <input
        type="text"
        id={inputId}
        value={value}
        onChange={onChange}
        className={S.styleInput}
        placeholder={placeholder}
      />
      <button className={S.submitButton} type="submit">
        <SearchIcon />
      </button>
    </label>
  );
}

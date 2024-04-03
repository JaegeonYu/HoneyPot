import React from 'react';
import * as T from '@/types';
import * as S from './SearchInput.css';
import { SearchIcon } from '@/_assets/icon';

export default function SearchInput({ inputId, onChange, value, placeholder, onSubmit }: T.SearchInputProps) {
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
      <button className={S.submitButton} onSubmit={onSubmit} type="submit">
        <SearchIcon />
      </button>
    </label>
  );
}

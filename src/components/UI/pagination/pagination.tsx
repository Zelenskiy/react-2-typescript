import React from "react";
import { getPagesArray } from "../../../utils/pages";
import cl from './pagination.module.css'

interface PostItemProps {
  totalPages: number;
  page: number;
  changePage: (p: number) => void;
}

const Pagination: React.FC<PostItemProps> = ({totalPages, page, changePage}) => {
  const pagesArray = getPagesArray(totalPages);  
  return (
    <div className={cl.page__wrapper}>
    {pagesArray.map((p) => (
      <span 
        className={page===p?`${cl.page} ${cl.page__current}`:cl.page} 
        key={p}
        onClick={() => changePage(p)}
        >
          {p}
        </span>
    ))}
  </div>
  );
};

export default Pagination;

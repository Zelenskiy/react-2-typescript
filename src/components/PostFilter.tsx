import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

interface PostFilterProps {
  filter: {
    sort: string;
    query: string;
  };
  setFilter: React.Dispatch<React.SetStateAction<{ sort: string; query: string }>>;
}

const PostFilter: React.FC<PostFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput 
        placeholder='Search...'
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <MySelect 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортування'
        options={[
          {value: 'title', name: 'По назві'},
          {value: 'body', name: 'По опису'},
        ]}
      />
    </div>
  );
}

export default PostFilter;

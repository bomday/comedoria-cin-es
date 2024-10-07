import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex gap-5 items-center w-full text-xl leading-none whitespace-nowrap text-neutral-400 max-md:max-w-full">
      <form className="flex overflow-hidden flex-wrap flex-1 shrink gap-6 items-end self-stretch px-6 py-4 my-auto w-full bg-white basis-0 min-w-[240px] rounded-[34.909px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46532826374b57ca5632c672e061064d661e7b25a3949eb614185482bea0f7a8?placeholderIfAbsent=true&apiKey=6dbaaf0a66ca4d72973daca081ce92d0" className="object-contain shrink-0 w-6 aspect-[1.04]" alt="" />
        <label htmlFor="searchInput" className="sr-only">Buscar</label>
        <input
          type="search"
          id="searchInput"
          placeholder="Buscar"
          className="flex-1 shrink gap-px self-stretch min-w-[240px] max-md:max-w-full bg-transparent border-none outline-none"
        />
      </form>
    </div>
  );
};

export default SearchBar;
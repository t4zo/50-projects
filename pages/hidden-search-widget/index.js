import { useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
// import vanillaJs from '../../scripts/hidden-search-widget';

export default function HiddenSearchWidget() {
  const searchRef = useRef();
  const inputRef = useRef();

  // useEffect(() => {
  //   vanillaJs();
  // }, []);
  
  function handleSearchAnimation() {
    searchRef.current.classList.add('hsw-active');
    inputRef.current.focus();
  }

  return (
    <Layout title='Hidden Search Widget'>
      <main className='hsw-main'>
        <div className='hsw-search' ref={searchRef}>
          <input type='text' className='hsw-input' placeholder='Search...' ref={inputRef} />
          <button className='hsw-btn' onClick={handleSearchAnimation}>
            <i className='fas fa-search'></i>
          </button>
        </div>
      </main>
    </Layout>
  );
}

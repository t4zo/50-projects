import { useEffect } from 'react';
import Layout from '../../components/Layout';
import vanillaJs from './vanillaJs';

export default function ExpandingCardsPage() {
  useEffect(() => {
    vanillaJs();
  }, []);

  return (
    <Layout title='Expanding Cards'>
      <main className='ec-main'>
        <div className='ec-container'>
          <div className='ec-panel ec-active' id='ec-explore-the-world'>
            <h3>Explore The World</h3>
          </div>
          <div className='ec-panel' id='ec-wild-forest'>
            <h3>Wild Forest</h3>
          </div>
          <div className='ec-panel' id='ec-sunny-beach'>
            <h3>Sunny Beach</h3>
          </div>
          <div className='ec-panel' id='ec-city-on-winter'>
            <h3>City on Winter</h3>
          </div>
          <div className='ec-panel' id='ec-mountains-clouds'>
            <h3>Mountains - Clouds</h3>
          </div>
        </div>
      </main>
    </Layout>
  );
}

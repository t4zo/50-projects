import { useEffect } from 'react';
import Layout from '../../components/Layout';
import vanillaJs from '../../scripts/progress-steps';

export default function ProgressStepsPage() {
  useEffect(() => {
    vanillaJs();
  }, []);

  return (
    <Layout title='Progress Steps'>
      <main className='ps-main'>
        <div className='ps-container'>
          <div className='ps-progress-container'>
            <div id='ps-progress' className='ps-progress'></div>
            <div className='ps-circle ps-active'>1</div>
            <div className='ps-circle'>2</div>
            <div className='ps-circle'>3</div>
            <div className='ps-circle'>4</div>
          </div>
          <div>
            <button id='ps-prev' className='ps-btn' disabled>
              Prev
            </button>
            <button id='ps-next' className='ps-btn'>
              Next
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

import { useEffect } from 'react';
import Layout from '../../components/Layout';
import vanillaJs from './vanillaJs';

export default function RotatingNavigationPage() {
  useEffect(() => {
    vanillaJs();
  }, []);

  return (
    <Layout title='Rotating Navigation'>
      <main className="rn-main">
        <div className="rn-container">
          <div className="rn-circle-container">
            <div className="rn-circle">
              <button id="rn-close">
                <i className="fas fa-times"></i>
              </button>
              <button id="rn-open">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="rn-content">
            <h1>Amazing Article</h1>
            <small>Tácio de Souza Campos</small>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quis aspernatur accusamus magnam at velit temporibus cum debitis ea voluptatum
              impedit, repellat ipsum sequi repudiandae vitae modi veritatis quaerat dignissimos enim deserunt. Atque ut vel porro beatae quisquam ipsum rem
              voluptates, a at, architecto, qui veritatis provident quas impedit? Quibusdam et velit deleniti esse enim. Perferendis facilis, temporibus vitae quae
              corporis dolorum voluptatum repudiandae nam error dignissimos ea, numquam magnam neque excepturi mollitia itaque ipsam aliquid illo sit nostrum iure!
              Voluptatem expedita fugiat aliquid esse sequi, mollitia beatae deleniti atque doloribus possimus, quidem incidunt hic voluptatibus praesentium,
              similique illum fugit.
            </p>

            <h3>My Dog</h3>
            <img
              src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              alt="doggy"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum
              unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit
              deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint,
              neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?
            </p>
          </div>
        </div>

        <nav>
          <ul>
            <li><a href="#"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="#"><i className="fas fa-user-alt"></i>About</a></li>
            <li><a href="#"><i className="fas fa-envelope"></i>Contact</a></li>
          </ul>
        </nav>
      </main>
    </Layout>
  );
}

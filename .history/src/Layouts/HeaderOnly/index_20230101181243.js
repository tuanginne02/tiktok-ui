import Header from '~/layouts/components/Header';
import Bottom from '../components/Bottom';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Bottom />
    </div>
  );
}

export default HeaderOnly;

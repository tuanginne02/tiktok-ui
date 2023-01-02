import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;

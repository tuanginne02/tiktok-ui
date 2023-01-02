import Header from '~/layouts/components/Header';
import F from '../components/F';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <F />
    </div>
  );
}

export default HeaderOnly;

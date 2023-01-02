import Header from '~/layouts/components/Header';
import  from '../components/';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      < />
    </div>
  );
}

export default HeaderOnly;

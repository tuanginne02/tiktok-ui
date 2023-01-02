import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Botto
    </div>
  );
}

export default HeaderOnly;

import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

import Footer from "./footer";
import Navbar from "./header";

const Layout = ({children}) => {
  return <div>
    <Navbar />
        {children}
    <Footer />
  </div>;
};
export default Layout;
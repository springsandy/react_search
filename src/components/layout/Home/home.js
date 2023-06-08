import Header from "../Header/header";
import Search from "../Search/search"
// import Footer from "../Footer/footer";

const home = () => {
  return (
    <div class="bodyDiv">
      <Header />

      <div class="searchDiv">
       <Search />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default home;
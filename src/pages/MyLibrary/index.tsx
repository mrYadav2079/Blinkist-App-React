import MyLibrary from "../../components/templates/MyLibrary/index";
import Typography from "../../components/atoms/Typography/index";
import {HeaderComponent as Header} from "../../components/organisms/Header/index";
import {Tabs} from "../../components/organisms/Tabs/index";
import Footer from "../../components/organisms/Footer/index";
import {Constants} from "../../data/Constants";

const LibraryPage = () => {
  return (
    <>
      <MyLibrary
        header={<Header />}
        heading={
          <Typography variant="h1">{Constants.header.heading}</Typography>
        }
        tab={<Tabs />}
        // footer={<Footer />}
      />
      <Footer />
    </>
  );
};

export default LibraryPage;
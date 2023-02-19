import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { HeroBanners } from "./components/HeroBanners/HeroBanners";
import "./styles/globals.css";
const App = () => {
  return (
    <div className="w-screen">
      <Header />
      <HeroBanners
        variant="image text with button"
        headingText="Delivered by our finance partners"
        bodyText="We depend on our partners to be part of our programmes and help businesses thrive."
        headingType="4"
        headingVariant="display-2"
        paragraphVariant="body-l"
        btnText="Our partners"
        btn1Variant="primary-inverted"
        imageUrl={require("./assets/images/hero-banner.png")}
        imageAlignment="image-right"
      />
      <HeroBanners
        variant="image text with two buttons"
        headingText="Helping small businesses find a way"
        bodyText="We’re experts in small business finance and we work with a broad range of partners to help businesses like yours.."
        headingType="4"
        headingVariant="display-2"
        paragraphVariant="body-l"
        btnText="Explore finance options"
        btn1Variant="primary-default"
        btn2Text="Find business guidance"
        btn2Variant="secondary-default"
        imageUrl={require("./assets/images/illustration.png")}
        imageAlignment="image-left"
      />
      <Footer />
    </div>
  );
};

export default App;

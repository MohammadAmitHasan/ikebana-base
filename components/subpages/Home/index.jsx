import AboutUs from './AboutUs';
import Banner from './Banner';
import Categories from './Categories';
import Design from './Design';
import Email from './Email';
import Links from './Links';
import MisterDesign from './MisterDesign';
import NewOnline from './NewOnline';

const HomeComponent = () => {
  return (
    <div className="space-y-14 lg:space-y-20">
      <Banner />
      <Categories />
      <NewOnline />
      <Design />
      <AboutUs />
      <MisterDesign />
      <Email />
      <Links />
    </div>
  );
};
export default HomeComponent;

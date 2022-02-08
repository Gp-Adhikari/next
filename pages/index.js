import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import HeroSection from "../components/HeroSection.component";
import RecentProjects from "../components/RecentProjects.component";
import SEO from "../components/Seo.component";
import Title from "../components/Title.component";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo.component";

export default function Home() {
  return (
    <>
      <SEO title={"Home"} siteTitle={"Zpro"} />
      <Header />
      <HeroSection />
      <Title TitleText="What We Do?" />
      <WhatWeDo />
      <Title TitleText="Recent Projects" />
      <RecentProjects />
      <Footer />
    </>
  );
}

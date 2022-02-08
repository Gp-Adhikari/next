import { useEffect } from "react";
import WhatWeDoCard from "./WhatWeDo-Card.component";

import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  useEffect(() => {
    //WhatWeDo animation

    new gsap.timeline({
      scrollTrigger: {
        trigger: ".whatWeDoContainer",
        scrub: false,
        start: "top 50%",
      },
    }).from(".whatWeDo-Card", 2, {
      opacity: 0,
      ease: Power1.inOut,
      stagger: { amount: 1 },
    });
  }, []);
  return (
    <>
      <div className="whatWeDoContainer">
        <div className="whatWeDoBackground">
          <img
            className="WhatWeDoBg"
            src={"/client/WhatWeDobackground.svg"}
            alt="what we do background"
          />
        </div>
        <div className="whatWeDoCardContainer">
          <WhatWeDoCard
            img={"/client/website-development-icon.svg"}
            title="Website Development"
            desc="We build custom website for better user experience and user interface for your brand identity."
          />
          <WhatWeDoCard
            img={"/client/hosting-icon.svg"}
            title="Domain &amp; Hosting"
            desc="We provide reliable website hosting solution that handles every aspect of your website."
          />
          <WhatWeDoCard
            img={"/client/seo-icon.svg"}
            title="SEO"
            desc="We help you to lift your business and obtain more advantage througn SEO which restlts in higher traffic and ranking of your site."
          />
          <WhatWeDoCard
            img={"/client/content-writing-icon.svg"}
            title="Content Writing"
            desc="We make sure to accurately showcase the products and services you offer to your targeted audiences."
          />
          <WhatWeDoCard
            img={"/client/redesign-icon.svg"}
            title="Website Redesign"
            desc="We will improve your web layouts with better UI/UX and make it easier to use for your audiences."
          />
          <WhatWeDoCard
            img={"/client/logo-icon.svg"}
            title="Logo Design"
            desc="We also design your business logo that works with your vision and gives your business uniqueness and different taste."
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

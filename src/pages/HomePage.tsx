import { Box } from "@mantine/core";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import FeatureCardsSection from "../components/home/FeatureCardsSection";
import CtaBanner from "../components/home/CtaBanner";

import heroImage from "../assets/images/hero.jpg";
import intro1 from "../assets/images/intro-1.jpg";
import intro2 from "../assets/images/intro-2.jpg";
import intro3 from "../assets/images/intro-3.jpg";
import roomImage from "../assets/images/room.jpg";
import restaurantImage from "../assets/images/ristorante.jpg";
import natureImage from "../assets/images/room.jpg";
import ctaImage from "../assets/images/room.jpg";
import SiteFooter from "../components/common/SiteFooter";

export default function HomePage() {
  return (
    <Box style={{ background: "#f4eee5" }}>
      <HeroSection backgroundImage={heroImage} />

      <IntroSection
        imageLeft={intro1}
        imageCenter={intro2}
        imageRight={intro3}
      />

      <FeatureCardsSection
        roomImage={roomImage}
        restaurantImage={restaurantImage}
        natureImage={natureImage}
      />

      <CtaBanner backgroundImage={ctaImage} />
       <SiteFooter />
    </Box>
  );
}
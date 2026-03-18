import { Box } from "@mantine/core";
import RestaurantHeroSection from "../components/restaurant/RestaurantHeroSection";
import RestaurantIntroSection from "../components/restaurant/RestaurantIntroSection";
import RestaurantHighlightsSection from "../components/restaurant/RestaurantHighlightsSection";
import RestaurantGalleryStrip from "../components/restaurant/RestaurantGalleryStrip";
import RestaurantCtaSection from "../components/restaurant/RestaurantCtaSection";
import SiteFooter from "../components/common/SiteFooter";

import heroImage from "../assets/images/intro-7.jpg";
import chefImage from "../assets/images/cuoca-4.jpg";
import highlight1 from "../assets/images/piatto.jpg";
import highlight2 from "../assets/images/olio.jpg";
import highlight3 from "../assets/images/piatto-3.webp";
import gallery1 from "../assets/images/cuoca-6.jpg";
import gallery2 from "../assets/images/cuoca-3.jpg";
import gallery3 from "../assets/images/cuoca-5.jpg";
import img1 from "../assets/images/piatto-7.jpg";
import img2 from "../assets/images/piatto-8.jpg";
import img3 from "../assets/images/piatto-9.jpg";
import img4 from "../assets/images/piatto-10.jpg";
import img5 from "../assets/images/piatto-4.jpg";

export default function RestaurantPage() {
  return (
    <Box style={{ background: "#f4eee5" }}>
      <RestaurantHeroSection backgroundImage={heroImage} />

      <RestaurantIntroSection chefImage={chefImage} />

      <RestaurantHighlightsSection
        items={[
          { image: highlight1 },
          { image: highlight2 },
          { image: highlight3 },
        ]}
      />

      <RestaurantGalleryStrip
        image1={gallery1}
        image2={gallery2}
        image3={gallery3}
      />

      <RestaurantCtaSection
        images={[img1, img2, img3, img4,img5]}
      />
      
      <SiteFooter />
    </Box>
  );
}
import { Box } from "@mantine/core";
import RoomsHeroSection from "../components/rooms/RoomsHeroSection";
import RoomsInfoSection from "../components/rooms/RoomsInfoSection";
import RoomsGalleryStrip from "../components/rooms/RoomsGalleryStrip";

import roomsHeroImage from "../assets/images/room.jpg";
import gallery1 from "../assets/images/room.jpg";
import gallery2 from "../assets/images/room.jpg";
import gallery3 from "../assets/images/room.jpg";
import gallery4 from "../assets/images/room.jpg";
import gallery5 from "../assets/images/room.jpg";
import gallery6 from "../assets/images/room.jpg";
import gallery7 from "../assets/images/room.jpg";
import RoomsMasonryGallery from "../components/rooms/RoomsMasonryGallery";
import SiteFooter from "../components/common/SiteFooter";

export default function RoomsPage() {
  return (
    <Box style={{ background: "#f4eee5" }}>
      <RoomsHeroSection backgroundImage={roomsHeroImage} />

      <RoomsInfoSection />

      <RoomsGalleryStrip
        image1={gallery1}
        image2={gallery2}
        image3={gallery3}
      />

      <RoomsMasonryGallery
        images={[
          gallery1,
          gallery2,
          gallery3,
          gallery4,
          gallery5,
          gallery6,
          gallery7,
        ]}
      />
       <SiteFooter />
    </Box>
  );
}
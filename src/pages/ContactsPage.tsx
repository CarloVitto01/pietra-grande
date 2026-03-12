import { Box } from "@mantine/core";
import ContactsHeroSection from "../components/contacts/ContactsHeroSection";
import ContactsInfoStrip from "../components/contacts/ContactsInfoStrip";
import ContactsMapFormSection from "../components/contacts/ContactsMapFormSection";
import ContactsSocialSection from "../components/contacts/ContactsSocialSection";
import SiteFooter from "../components/common/SiteFooter";

import heroImage from "../assets/images/intro-1.jpg";
import socialImage from "../assets/images/intro-2.jpg";

export default function ContactsPage() {
  return (
    <Box style={{ background: "#f4eee5" }}>
      <ContactsHeroSection backgroundImage={heroImage} />

      <ContactsInfoStrip />
      <ContactsMapFormSection
        mapEmbedUrl="https://www.google.com/maps?q=Pietra%20Grande%20Otranto%20LE&output=embed"
      />
      <ContactsSocialSection image={socialImage} />

      <SiteFooter />
    </Box>
  );
}
import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import SiteNavbar from "../common/SiteNavbar";

type Props = {
  backgroundImage: string;
};

export default function RestaurantHeroSection({ backgroundImage }: Props) {
  return (
    <Box
      id="ristorante"
      component="section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "78vh",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(74,46,28,0.66) 0%, rgba(74,46,28,0.52) 32%, rgba(0,0,0,0.10) 62%, rgba(0,0,0,0.18) 100%)",
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.16) 100%)",
          zIndex: 2,
        }}
      />

      <SiteNavbar />

      <Container
        size="xl"
        px="md"
        style={{
          position: "relative",
          zIndex: 3,
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 120,
          paddingBottom: 72,
        }}
      >
        <Box
          style={{
            width: "100%",
            maxWidth: 620,
          }}
        >
          <Stack gap={18}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Title
                order={1}
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                  lineHeight: 1,
                  fontWeight: 500,
                  color: "#f4eadf",
                  fontStyle: "italic",
                }}
              >
                Il nostro ristorante
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ transformOrigin: "left center" }}
            >
              <Box
                style={{
                  width: 360,
                  maxWidth: "100%",
                  height: 1,
                  background: "rgba(245, 228, 209, 0.55)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
            >
              <Text
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.2rem, 1.8vw, 1.75rem)",
                  lineHeight: 1.5,
                  color: "#f4eadf",
                }}
              >
                Delizie autentiche della nostra terra
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.54 }}
            >
              <Text
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                  lineHeight: 1.9,
                  color: "rgba(249, 239, 228, 0.92)",
                  maxWidth: 500,
                }}
              >
                Il nostro ristorante propone una cucina sincera e territoriale,
                fatta di ingredienti genuini, ricette della tradizione e un’atmosfera
                calda che rende ogni pranzo o cena un’esperienza autentica.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.66 }}
            >
            </motion.div>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
import { Box, Button, Container, Stack, Text, Title } from "@mantine/core";
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
        initial={{ opacity: 0.92 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "opacity",
        }}
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(74,46,28,0.52) 0%, rgba(74,46,28,0.34) 30%, rgba(0,0,0,0.06) 60%, rgba(0,0,0,0.18) 100%)",
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.14) 100%)",
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
          paddingTop: 155,
          paddingBottom: 70,
        }}
      >
        <Box style={{ width: "100%", maxWidth: 620 }}>
          <Stack gap={16}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.05, ease: "easeOut" }}
            >
              <Title
                order={1}
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                  lineHeight: 1,
                  fontWeight: 500,
                  color: "#fff8ea",
                  fontStyle: "italic",
                }}
              >
                Il nostro ristorante
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.85 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
            >
              <Box
                style={{
                  width: 360,
                  maxWidth: "100%",
                  height: 2,
                  background: "#f5d300",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.14, ease: "easeOut" }}
            >
              <Text
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.2rem, 1.8vw, 1.8rem)",
                  lineHeight: 1.45,
                  color: "#fff5de",
                }}
              >
                Delizie autentiche della nostra terra
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
            >
              <Button
                component={motion.a}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
                href="#menu-ristorante"
                radius="xl"
                style={{
                  alignSelf: "flex-start",
                  background: "#f5d300",
                  color: "#111111",
                  height: 46,
                  paddingInline: 24,
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Scopri il menù
              </Button>
            </motion.div>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
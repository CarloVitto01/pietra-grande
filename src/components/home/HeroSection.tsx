import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SiteNavbar from "../common/SiteNavbar";

type Props = {
  backgroundImage: string;
};

export default function HeroSection({ backgroundImage }: Props) {
  const { t } = useTranslation();

  return (
    <Box
      id="home"
      component="section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
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
            "linear-gradient(90deg, rgba(244,234,222,0.80) 0%, rgba(244,234,222,0.58) 28%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0.18) 100%)",
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.14) 100%)",
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
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 110,
          paddingBottom: 60,
        }}
      >
        <Box
          style={{
            width: "100%",
            maxWidth: 520,
          }}
        >
          <Stack gap={18}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Text
                style={{
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  lineHeight: 0.95,
                  fontWeight: 500,
                  color: "#000000",
                  fontStyle: "italic",
                  fontFamily: "Georgia, serif",
                }}
              >
                {t("hero.welcome")}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
            >
              <Title
                order={1}
                style={{
                  fontSize: "clamp(2.5rem, 5.3vw, 5.2rem)",
                  lineHeight: 0.98,
                  fontWeight: 500,
                  color: "#000000",
                  fontFamily: "Georgia, serif",
                }}
              >
                {t("hero.titleLine1")}
                <br />
                {t("hero.titleLine2")}
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              style={{ transformOrigin: "left center" }}
            >
              <Box
                style={{
                  width: 92,
                  height: 1,
                  background: "#f4d400",
                  marginTop: 2,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Text
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.22rem)",
                  lineHeight: 1.7,
                  color: "#000000",
                  fontStyle: "italic",
                  fontFamily: "Georgia, serif",
                  maxWidth: 430,
                }}
              >
                {t("hero.subtitle")}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62 }}
            >
            </motion.div>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
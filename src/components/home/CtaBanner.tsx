import { Box, Button, Container, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = {
  backgroundImage: string;
};

export default function CtaBanner({ backgroundImage }: Props) {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: 420,
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
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
            "linear-gradient(180deg, rgba(44,28,20,0.35) 0%, rgba(44,28,20,0.54) 45%, rgba(44,28,20,0.66) 100%)",
          zIndex: 1,
        }}
      />

      <Container
        size="xl"
        px="md"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        <Stack gap={16} align="center" style={{ maxWidth: 760 }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Title
              order={2}
              ta="center"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                lineHeight: 1.12,
                fontWeight: 500,
                color: "#f8efe4",
                textShadow: "0 2px 12px rgba(0,0,0,0.18)",
              }}
            >
              {t("ctaBanner.title")}
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <Text
              ta="center"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1rem, 1.45vw, 1.16rem)",
                lineHeight: 1.8,
                color: "rgba(255,244,233,0.92)",
                maxWidth: 680,
              }}
            >
              {t("ctaBanner.text")}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            <Button
              component={motion.a}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contatti"
              size="md"
              radius={0}
              style={{
                marginTop: 6,
                background: "#8b5e3c",
                color: "#fff7ef",
                paddingInline: 28,
                height: 46,
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                boxShadow: "0 10px 26px rgba(0,0,0,0.16)",
              }}
            >
              {t("ctaBanner.button")}
            </Button>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}
import { Box, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FadeIn from "../common/FadeIn";

type Props = {
  imageLeft: string;
  imageCenter: string;
  imageRight: string;
};

function AnimatedImage({
  src,
  alt,
  delay,
}: {
  src: string;
  alt: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -5 }}
      style={{ overflow: "hidden" }}
    >
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.45 }}>
        <Image src={src} alt={alt} radius={0} h={220} fit="cover" />
      </motion.div>
    </motion.div>
  );
}

export default function IntroSection({
  imageLeft,
  imageCenter,
  imageRight,
}: Props) {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "56px 0 52px",
      }}
    >
      <Container size="xl" px="md">
        <Stack gap={24}>
          <FadeIn>
            <Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 14,
                }}
              >
                <Title
                  order={2}
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2rem, 3vw, 3rem)",
                    lineHeight: 1.1,
                    fontWeight: 500,
                    color: "#4c3126",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t("intro.title")}
                </Title>

                <Box
                  style={{
                    height: 1,
                    flex: 1,
                    background: "rgba(103, 76, 55, 0.22)",
                  }}
                />
              </Box>

              <Text
                style={{
                  maxWidth: 900,
                  fontSize: "clamp(1rem, 1.35vw, 1.12rem)",
                  lineHeight: 1.9,
                  color: "#5e473b",
                  fontFamily: "Georgia, serif",
                }}
              >
                {t("intro.text")}
              </Text>
            </Box>
          </FadeIn>

          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <AnimatedImage src={imageLeft} alt="Agriturismo exterior" delay={0.08} />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 3 }}>
              <AnimatedImage src={imageCenter} alt="Room interior" delay={0.18} />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <AnimatedImage src={imageRight} alt="Agriturismo view" delay={0.28} />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
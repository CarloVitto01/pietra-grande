import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import FadeIn from "../common/FadeIn";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = {
  images: string[];
};

export default function RestaurantCtaSection({ images }: Props) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "28px 0 72px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter="md" align="stretch">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.65) 100%)",
                padding: "48px 38px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FadeIn>
                <Stack gap={18} style={{ maxWidth: 500 }}>
                  <Title
                    order={2}
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(2.1rem, 3vw, 3.5rem)",
                      lineHeight: 1.1,
                      fontWeight: 500,
                      color: "#111111",
                    }}
                  >
                    {t("restaurantCta.title")}
                  </Title>

                  <Text
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                      lineHeight: 1.9,
                      color: "#1f1a12",
                    }}
                  >
                    {t("restaurantCta.text")}
                  </Text>

                  <Box pt={4}>
                    <Button
                      component={motion.a}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.985 }}
                      href="https://wa.me/393881063408?text=Salve%2C%20vorrei%20prenotare%20un%20tavolo%20da%20Pietra%20Grande."
                      target="_blank"
                      rel="noopener noreferrer"
                      radius="xl"
                      rightSection={<IconChevronRight size={16} stroke={1.8} />}
                      style={{
                        background: "#f5d300",
                        color: "#111111",
                        height: 48,
                        paddingInline: 26,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t("restaurantCta.button")}
                    </Button>
                  </Box>
                </Stack>
              </FadeIn>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn delay={0.05}>
              <Box
                style={{
                  position: "relative",
                  height: 420,
                  overflow: "hidden",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={images[activeIndex]}
                    alt={`${t("restaurantCta.imageAlt")} ${activeIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </AnimatePresence>

                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.16) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </FadeIn>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
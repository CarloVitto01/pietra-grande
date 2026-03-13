import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconWifi,
  IconSnowflake,
  IconDeviceTv,
  IconBath,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = {
  image1: string;
  image2: string;
  image3: string;
};

type RoomSlide = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

function FeatureItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Group gap={10} wrap="nowrap" align="center">
      <ThemeIcon
        radius="xl"
        size={34}
        variant="light"
        style={{
          background: "rgba(168, 100, 36, 0.12)",
          color: "#a86424",
          border: "1px solid rgba(168, 100, 36, 0.14)",
          flexShrink: 0,
        }}
      >
        {icon}
      </ThemeIcon>

      <Text
        style={{
          color: "#6b4a33",
          fontSize: "0.97rem",
          lineHeight: 1.45,
        }}
      >
        {label}
      </Text>
    </Group>
  );
}

export default function RoomsGalleryStrip({
  image1,
  image2,
  image3,
}: Props) {
  const { t } = useTranslation();

  const slides = useMemo<RoomSlide[]>(
    () => [
      {
        image: image1,
        alt: t("roomsGallery.slides.0.alt"),
        title: t("roomsGallery.slides.0.title"),
        description: t("roomsGallery.slides.0.description"),
      },
      {
        image: image2,
        alt: t("roomsGallery.slides.1.alt"),
        title: t("roomsGallery.slides.1.title"),
        description: t("roomsGallery.slides.1.description"),
      },
      {
        image: image3,
        alt: t("roomsGallery.slides.2.alt"),
        title: t("roomsGallery.slides.2.title"),
        description: t("roomsGallery.slides.2.description"),
      },
    ],
    [image1, image2, image3, t]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      id="galleria-camere"
      component="section"
      style={{
        background: "#f4eee5",
        padding: "40px 0 72px",
      }}
    >
      <Container size="xl" px="md">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Stack gap={8} mb={34} align="center">
            <Text
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 3vw, 3rem)",
                lineHeight: 1.08,
                color: "#6b4a33",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              {t("roomsGallery.title")}
            </Text>

            <Text
              maw={760}
              ta="center"
              style={{
                color: "rgba(107, 74, 51, 0.85)",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              {t("roomsGallery.subtitle")}
            </Text>
          </Stack>
        </motion.div>

        <Grid gutter={{ base: 20, md: 34 }} align="stretch">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box
              style={{
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                minHeight: 420,
                height: "100%",
                background: "#eadfce",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.image}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                  style={{ height: "100%" }}
                >
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    h={480}
                    fit="cover"
                    radius={0}
                  />
                </motion.div>
              </AnimatePresence>

              <Group
                justify="space-between"
                style={{
                  position: "absolute",
                  left: 14,
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              >
                <motion.button
                  type="button"
                  onClick={goPrev}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    pointerEvents: "auto",
                    width: 46,
                    height: 46,
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
                  }}
                >
                  <IconChevronLeft size={20} stroke={1.9} />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={goNext}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    pointerEvents: "auto",
                    width: 46,
                    height: 46,
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
                  }}
                >
                  <IconChevronRight size={20} stroke={1.9} />
                </motion.button>
              </Group>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.45 }}
                style={{ height: "100%" }}
              >
                <Box
                  style={{
                    background: "#efe5d8",
                    border: "1px solid rgba(103, 76, 55, 0.1)",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.05)",
                    padding: "34px 28px",
                    minHeight: 480,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack gap={18}>
                    <Box>
                      <Text
                        style={{
                          color: "#a86424",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          marginBottom: 10,
                        }}
                      >
                        {t("roomsGallery.eyebrow")}
                      </Text>

                      <Text
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "clamp(1.55rem, 2.2vw, 2.2rem)",
                          lineHeight: 1.18,
                          color: "#6b4a33",
                          fontWeight: 500,
                          marginBottom: 14,
                        }}
                      >
                        {activeSlide.title}
                      </Text>

                      <Text
                        style={{
                          color: "rgba(107, 74, 51, 0.88)",
                          fontSize: "0.98rem",
                          lineHeight: 1.8,
                        }}
                      >
                        {activeSlide.description}
                      </Text>
                    </Box>

                    <Stack gap={12}>
                      <FeatureItem
                        icon={<IconWifi size={18} stroke={1.8} />}
                        label={t("roomsGallery.features.wifi")}
                      />
                      <FeatureItem
                        icon={<IconSnowflake size={18} stroke={1.8} />}
                        label={t("roomsGallery.features.airConditioning")}
                      />
                      <FeatureItem
                        icon={<IconDeviceTv size={18} stroke={1.8} />}
                        label={t("roomsGallery.features.tv")}
                      />
                      <FeatureItem
                        icon={<IconBath size={18} stroke={1.8} />}
                        label={t("roomsGallery.features.privateBathroom")}
                      />
                    </Stack>
                  </Stack>

                  <Box mt={28}>
                    <Button
                      component={motion.a}
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#contatti"
                      radius={0}
                      fullWidth
                      style={{
                        background: "#a86424",
                        color: "#fff7ef",
                        height: 50,
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                      }}
                    >
                      {t("roomsGallery.button")}
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
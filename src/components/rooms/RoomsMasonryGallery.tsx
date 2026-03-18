import { useMemo, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Image,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconChevronLeft,
  IconChevronRight,
  IconX,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

type Props = {
  images: string[];
};

type GalleryItem = {
  src: string;
  alt: string;
};

function GalleryCard({
  item,
  delay,
  height,
  onClick,
}: {
  item: GalleryItem;
  delay: number;
  height: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay }}
      style={{ height: "100%" }}
    >
      <button
        type="button"
        onClick={onClick}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          padding: 0,
          background: "transparent",
          cursor: "pointer",
          display: "block",
          textAlign: "left",
        }}
      >
        <Box style={{ overflow: "hidden" }}>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
            <Image
              src={item.src}
              alt={item.alt}
              h={height}
              fit="cover"
              radius={0}
              w="100%"
            />
          </motion.div>
        </Box>

        <Box
          style={{
            paddingTop: 12,
          }}
        >
          <Text
            style={{
              color: "#6b4a33",
              fontSize: "0.95rem",
              lineHeight: 1.4,
            }}
          >
            {item.alt}
          </Text>
        </Box>
      </button>
    </motion.div>
  );
}

function PreviewArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? IconChevronLeft : IconChevronRight;

  return (
    <Box
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: direction === "left" ? "clamp(10px, 2.6vw, 22px)" : undefined,
        right: direction === "right" ? "clamp(10px, 2.6vw, 22px)" : undefined,
        zIndex: 20,
      }}
    >
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        style={{
          width: "clamp(42px, 9vw, 54px)",
          height: "clamp(42px, 9vw, 54px)",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.34)",
          background: "rgba(59, 47, 38, 0.34)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "#fffaf3",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
          padding: 0,
        }}
      >
        <Icon size={22} stroke={1.9} />
      </motion.button>
    </Box>
  );
}

export default function RoomsMasonryGallery({ images }: Props) {
  const { t } = useTranslation();

  const gallery = useMemo<GalleryItem[]>(() => {
    const fallback = images[0] ?? "";

return [
  { src: images[0] ?? fallback, alt: t("roomsMasonry.items.0") },
  { src: images[1] ?? fallback, alt: t("roomsMasonry.items.1") },
  { src: images[2] ?? fallback, alt: t("roomsMasonry.items.2") },
  { src: images[3] ?? fallback, alt: t("roomsMasonry.items.3") },
  { src: images[4] ?? fallback, alt: t("roomsMasonry.items.4") },
  { src: images[5] ?? fallback, alt: t("roomsMasonry.items.5") },
  { src: images[6] ?? fallback, alt: t("roomsMasonry.items.6") },
  { src: images[7] ?? fallback, alt: t("roomsMasonry.items.7") },
].filter((item) => item.src);
  }, [images, t]);

  const [opened, setOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openPreview = (index: number) => {
    setActiveIndex(index);
    setOpened(true);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const activeItem = gallery[activeIndex];

  return (
    <>
      <Box
        component="section"
        style={{
          background: "#f4eee5",
          padding: "10px 0 80px",
        }}
      >
        <Container size="xl" px="md">
          <Stack gap={8} align="center" mb={34}>
            <Text
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.9rem, 2.8vw, 2.8rem)",
                lineHeight: 1.1,
                color: "#6b4a33",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              {t("roomsMasonry.title")}
            </Text>

            <Text
              maw={760}
              ta="center"
              style={{
                color: "rgba(107, 74, 51, 0.84)",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              {t("roomsMasonry.subtitle")}
            </Text>
          </Stack>

          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 8 }}>
              {gallery[0] && (
                <GalleryCard
                  item={gallery[0]}
                  delay={0.04}
                  height={460}
                  onClick={() => openPreview(0)}
                />
              )}
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="md" h="100%">
                {gallery[1] && (
                  <GalleryCard
                    item={gallery[1]}
                    delay={0.1}
                    height={220}
                    onClick={() => openPreview(1)}
                  />
                )}

                {gallery[2] && (
                  <GalleryCard
                    item={gallery[2]}
                    delay={0.16}
                    height={220}
                    onClick={() => openPreview(2)}
                  />
                )}
              </Stack>
            </Grid.Col>

            {gallery[3] && (
              <Grid.Col span={{ base: 12, md: 4 }}>
                <GalleryCard
                  item={gallery[3]}
                  delay={0.12}
                  height={260}
                  onClick={() => openPreview(3)}
                />
              </Grid.Col>
            )}

            {gallery[4] && (
              <Grid.Col span={{ base: 12, md: 4 }}>
                <GalleryCard
                  item={gallery[4]}
                  delay={0.18}
                  height={260}
                  onClick={() => openPreview(4)}
                />
              </Grid.Col>
            )}

            {gallery[5] && (
              <Grid.Col span={{ base: 12, md: 4 }}>
                <GalleryCard
                  item={gallery[5]}
                  delay={0.24}
                  height={260}
                  onClick={() => openPreview(5)}
                />
              </Grid.Col>
            )}
            {gallery[6] && (
              <Grid.Col span={{ base: 12, md: 6 }}>
                <GalleryCard
                  item={gallery[6]}
                  delay={0.28}
                  height={280}
                  onClick={() => openPreview(6)}
                />
              </Grid.Col>
            )}

            {gallery[7] && (
              <Grid.Col span={{ base: 12, md: 6 }}>
                <GalleryCard
                  item={gallery[7]}
                  delay={0.32}
                  height={280}
                  onClick={() => openPreview(7)}
                />
              </Grid.Col>

            )}
          </Grid>
        </Container>
      </Box>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="auto"
        padding={0}
        withCloseButton={false}
        overlayProps={{
          blur: 4,
          backgroundOpacity: 0.5,
        }}
        styles={{
          content: {
            background: "transparent",
            boxShadow: "none",
            overflow: "visible",
            maxWidth: "100vw",
          },
          body: {
            padding: 0,
          },
          header: {
            display: "none",
          },
        }}
      >
        {activeItem && (
          <Box
            style={{
              position: "relative",
              width: "min(94vw, 1180px)",
              margin: "0 auto",
            }}
          >
            <motion.button
              type="button"
              onClick={() => setOpened(false)}
              whileHover={{ scale: 1.06, rotate: 90 }}
              style={{
                position: "absolute",
                top: "clamp(8px, 2vw, 14px)",
                right: "clamp(8px, 2vw, 14px)",
                width: "clamp(40px, 9vw, 48px)",
                height: "clamp(40px, 9vw, 48px)",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(59, 47, 38, 0.42)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "#fffaf3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
                zIndex: 30,
                padding: 0,
              }}
            >
              <IconX size={20} stroke={2} />
            </motion.button>

            <Box
              style={{
                position: "relative",
                overflow: "hidden",
                background: "#efe5d8",
                boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
              }}
            >
              <Box
                style={{
                  position: "relative",
                  background: "#eadfce",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Image
                      src={activeItem.src}
                      alt={activeItem.alt}
                      h="min(56vh, 760px)"
                      fit="contain"
                      radius={0}
                    />
                  </motion.div>
                </AnimatePresence>

                {gallery.length > 1 && (
                  <>
                    <PreviewArrow direction="left" onClick={prevImage} />
                    <PreviewArrow direction="right" onClick={nextImage} />
                  </>
                )}
              </Box>

              <Box
                style={{
                  padding: "clamp(16px, 4vw, 24px)",
                  background: "#f6efe6",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1.2rem, 4vw, 1.55rem)",
                    color: "#6b4a33",
                    marginBottom: 6,
                    lineHeight: 1.15,
                  }}
                >
                  {activeItem.alt}
                </Text>

                <Text
                  style={{
                    color: "rgba(107, 74, 51, 0.78)",
                    fontSize: "0.95rem",
                  }}
                >
                  {activeIndex + 1} / {gallery.length}
                </Text>
              </Box>
            </Box>
          </Box>
        )}
      </Modal>
    </>
  );
}
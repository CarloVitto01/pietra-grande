import { Box, Container, Grid, Image } from "@mantine/core";
import { motion } from "framer-motion";

type Props = {
  images: string[];
};

function GalleryImage({
  src,
  alt,
  delay,
  height,
}: {
  src: string;
  alt: string;
  delay: number;
  height: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -5 }}
      style={{ overflow: "hidden" }}
    >
      <motion.div whileHover={{ scale: 1.025 }} transition={{ duration: 0.45 }}>
        <Image
          src={src}
          alt={alt}
          radius={0}
          h={height}
          fit="cover"
          w="100%"
        />
      </motion.div>
    </motion.div>
  );
}

export default function RoomsMasonryGallery({ images }: Props) {
  const safeImages = [...images];
  const img = (index: number) => safeImages[index] ?? safeImages[0] ?? "";

  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "6px 0 72px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <GalleryImage
              src={img(0)}
              alt="Camera matrimoniale agriturismo"
              delay={0.05}
              height={430}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <GalleryImage
              src={img(1)}
              alt="Interno camera rustica"
              delay={0.14}
              height={430}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <GalleryImage
              src={img(2)}
              alt="Dettaglio camera"
              delay={0.08}
              height={300}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <GalleryImage
              src={img(3)}
              alt="Bagno camera"
              delay={0.16}
              height={300}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <GalleryImage
              src={img(4)}
              alt="Zona relax camera"
              delay={0.24}
              height={300}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <GalleryImage
              src={img(5)}
              alt="Vista ampia della stanza"
              delay={0.12}
              height={360}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <GalleryImage
              src={img(6)}
              alt="Dettaglio letto e finestra"
              delay={0.22}
              height={360}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
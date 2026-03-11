import { Box, Button, Container, Grid, Image, Text } from "@mantine/core";
import { motion } from "framer-motion";

type Props = {
  image1: string;
  image2: string;
  image3: string;
};

function AnimatedThumb({
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
      whileHover={{ y: -4 }}
      style={{ overflow: "hidden" }}
    >
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.45 }}>
        <Image src={src} alt={alt} radius={0} h={180} fit="cover" />
      </motion.div>
    </motion.div>
  );
}

export default function RoomsGalleryStrip({
  image1,
  image2,
  image3,
}: Props) {
  return (
    <Box
      id="galleria-camere"
      component="section"
      style={{
        background: "#f4eee5",
        padding: "20px 0 56px",
      }}
    >
      <Container size="xl" px="md">
        <Box
          style={{
            position: "relative",
            marginBottom: 34,
          }}
        >
          <Box
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              height: 1,
              background: "rgba(103, 76, 55, 0.14)",
              transform: "translateY(-50%)",
            }}
          />

          <Box
            style={{
              position: "relative",
              width: "fit-content",
              margin: "0 auto",
              background: "#efe5d8",
              border: "1px solid rgba(103, 76, 55, 0.12)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              padding: "14px 34px",
            }}
          >
            <Text
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.35rem, 2vw, 2rem)",
                lineHeight: 1.1,
                color: "#6b4a33",
                fontWeight: 500,
              }}
            >
              Galleria Fotografica
            </Text>
          </Box>
        </Box>

        <Grid gutter="md" mb={28}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <AnimatedThumb src={image1} alt="Camera agriturismo 1" delay={0.06} />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <AnimatedThumb src={image2} alt="Camera agriturismo 2" delay={0.16} />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <AnimatedThumb src={image3} alt="Bagno camera agriturismo" delay={0.26} />
          </Grid.Col>
        </Grid>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Button
              component={motion.a}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contatti"
              radius={0}
              style={{
                background: "#a86424",
                color: "#fff7ef",
                paddingInline: 30,
                height: 48,
                fontSize: "0.92rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
              }}
            >
              Prenota la tua camera
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
import { Box, Button, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import FadeIn from "../common/FadeIn";
import { motion } from "framer-motion";

type Props = {
  image: string;
};

export default function RestaurantCtaSection({ image }: Props) {
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
                    Il Nostro Ristorante
                  </Title>

                  <Text
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                      lineHeight: 1.9,
                      color: "#1f1a12",
                    }}
                  >
                    Un ambiente caldo e accogliente, dove gustare piatti autentici
                    della tradizione, preparati con ingredienti freschi e locali.
                  </Text>

                  <Box pt={4}>
                    <Button
                      component={motion.a}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.985 }}
                      href="#contatti"
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
                      Prenota il tuo tavolo
                    </Button>
                  </Box>
                </Stack>
              </FadeIn>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn delay={0.05}>
              <Image
                src={image}
                alt="Interno del ristorante"
                radius={0}
                h={420}
                fit="cover"
              />
            </FadeIn>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
import { Box, Button, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import FadeIn from "../common/FadeIn";
import { motion } from "framer-motion";

type Props = {
  chefImage: string;
};

export default function RestaurantIntroSection({ chefImage }: Props) {
  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "56px 0 44px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter={{ base: 28, md: 40 }} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn>
              <Stack gap={18} style={{ maxWidth: 560 }}>
                <Title
                  order={2}
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2rem, 3vw, 3.4rem)",
                    lineHeight: 1.1,
                    fontWeight: 500,
                    color: "#111111",
                  }}
                >
                  Cucina autentica e sapori genuini
                </Title>

                <Text
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1rem, 1.2vw, 1.12rem)",
                    lineHeight: 1.95,
                    color: "#1f1a12",
                  }}
                >
                  Il ristorante di Pietra Grande ti invita a scoprire i veri sapori
                  della tradizione. La nostra cucina valorizza ingredienti freschi,
                  prodotti del territorio e ricette autentiche, preparate con cura
                  e passione per offrire un’esperienza calda e sincera.
                </Text>

                <Box pt={4}>
                  <Button
                    component={motion.a}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.985 }}
                    href="#menu-ristorante"
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
                    Scopri il menù
                  </Button>
                </Box>
              </Stack>
            </FadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn delay={0.05}>
              <Image
                src={chefImage}
                alt="La cuoca del ristorante"
                radius={0}
                h={300}
                fit="cover"
              />
            </FadeIn>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
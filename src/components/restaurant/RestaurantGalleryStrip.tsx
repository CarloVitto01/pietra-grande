import { Box, Container, Grid, Image } from "@mantine/core";
import FadeIn from "../common/FadeIn";

type Props = {
  image1: string;
  image2: string;
  image3: string;
};

export default function RestaurantGalleryStrip({
  image1,
  image2,
  image3,
}: Props) {
  return (
    <Box
      id="menu-ristorante"
      component="section"
      style={{
        background: "#f4eee5",
        padding: "6px 0 34px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <FadeIn delay={0.04}>
              <Image src={image1} alt="Preparazione in cucina" radius={0} h={260} fit="cover" />
            </FadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <FadeIn delay={0.08}>
              <Image src={image2} alt="Piatto del ristorante" radius={0} h={260} fit="cover" />
            </FadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <FadeIn delay={0.12}>
              <Image src={image3} alt="Sala del ristorante" radius={0} h={260} fit="cover" />
            </FadeIn>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
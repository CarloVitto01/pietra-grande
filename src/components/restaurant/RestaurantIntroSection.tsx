import { Box, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import FadeIn from "../common/FadeIn";

type Props = {
  chefImage: string;
};

export default function RestaurantIntroSection({ chefImage }: Props) {
  const { t } = useTranslation();

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
                  {t("restaurantIntro.title")}
                </Title>

                <Text
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1rem, 1.2vw, 1.12rem)",
                    lineHeight: 1.95,
                    color: "#1f1a12",
                  }}
                >
                  {t("restaurantIntro.text")}
                </Text>
              </Stack>
            </FadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn delay={0.05}>
              <Image
                src={chefImage}
                alt={t("restaurantIntro.imageAlt")}
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
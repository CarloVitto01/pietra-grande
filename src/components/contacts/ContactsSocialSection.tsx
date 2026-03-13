import { ActionIcon, Box, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconMail } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import FadeIn from "../common/FadeIn";

type Props = {
  image: string;
};

export default function ContactsSocialSection({ image }: Props) {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "0 0 70px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter="md" align="stretch">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.22) 100%)",
                padding: "42px 34px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FadeIn>
                <Stack gap={18} style={{ maxWidth: 460 }}>
                  <Title
                    order={2}
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(2rem, 3vw, 3.2rem)",
                      lineHeight: 1.1,
                      fontWeight: 500,
                      color: "#111111",
                    }}
                  >
                    {t("contactsSocial.title")}
                  </Title>

                  <Text
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(1rem, 1.15vw, 1.08rem)",
                      lineHeight: 1.85,
                      color: "#1f1a12",
                    }}
                  >
                    {t("contactsSocial.text")}
                  </Text>

                  <Box
                    style={{
                      display: "flex",
                      gap: 14,
                    }}
                  >
                    <ActionIcon radius={999} size={46} variant="filled" color="dark">
                      <IconBrandFacebook size={22} />
                    </ActionIcon>

                    <ActionIcon radius={999} size={46} variant="filled" color="dark">
                      <IconBrandInstagram size={22} />
                    </ActionIcon>

                    <ActionIcon radius={999} size={46} variant="filled" color="dark">
                      <IconMail size={22} />
                    </ActionIcon>
                  </Box>
                </Stack>
              </FadeIn>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn delay={0.05}>
              <Image
                src={image}
                alt={t("contactsSocial.imageAlt")}
                radius={0}
                h={320}
                fit="cover"
              />
            </FadeIn>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
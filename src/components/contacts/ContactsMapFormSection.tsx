import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import FadeIn from "../common/FadeIn";

type Props = {
  mapEmbedUrl?: string;
};

export default function ContactsMapFormSection({ mapEmbedUrl }: Props) {
  const { t } = useTranslation();

  const whatsappMessage = encodeURIComponent(t("contactsMap.whatsappMessage"));
  const whatsappUrl = `https://wa.me/393881063408?text=${whatsappMessage}`;

  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "44px 0 70px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter={{ base: 32, md: 44 }} align="start">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn>
              <Box
                style={{
                  overflow: "hidden",
                  background: "#ebe4d7",
                  minHeight: 520,
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {mapEmbedUrl ? (
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="520"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("contactsMap.mapTitle")}
                  />
                ) : (
                  <Box
                    style={{
                      minHeight: 520,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 24,
                    }}
                  >
                    <Text
                      ta="center"
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.05rem",
                        lineHeight: 1.8,
                        color: "#5d4a3d",
                        maxWidth: 360,
                      }}
                    >
                      {t("contactsMap.mapPlaceholder")}
                    </Text>
                  </Box>
                )}
              </Box>
            </FadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn delay={0.06}>
              <Stack gap={18}>
                <Title
                  order={2}
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2.1rem, 3vw, 3.4rem)",
                    lineHeight: 1.1,
                    fontWeight: 500,
                    color: "#111111",
                  }}
                >
                  {t("contactsMap.title")}
                </Title>

                <Text
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                    lineHeight: 1.9,
                    color: "#1f1a12",
                    maxWidth: 560,
                  }}
                >
                  {t("contactsMap.text")}
                </Text>

                <Button
                  component="a"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  leftSection={<IconBrandWhatsapp size={18} stroke={2} />}
                  radius="xl"
                  style={{
                    alignSelf: "flex-start",
                    background: "#25D366",
                    color: "#ffffff",
                    height: 46,
                    paddingInline: 22,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {t("contactsMap.button")}
                </Button>

                <Box
                  component="form"
                  style={{
                    marginTop: 6,
                  }}
                />
              </Stack>
            </FadeIn>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
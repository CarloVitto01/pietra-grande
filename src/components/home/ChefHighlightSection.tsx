import { Box, Button, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = {
  chefImage: string;
};

export default function ChefHighlightSection({ chefImage }: Props) {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "20px 0 80px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter={{ base: 28, md: 48 }} align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              style={{ overflow: "hidden" }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src={chefImage}
                  alt={t("chefHighlight.imageAlt")}
                  radius={0}
                  h={560}
                  fit="cover"
                />
              </motion.div>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Stack gap={18} style={{ maxWidth: 620 }}>
                <Text
                  style={{
                    color: "#d4b700",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {t("chefHighlight.eyebrow")}
                </Text>

                <Title
                  order={2}
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2.2rem, 3.2vw, 4rem)",
                    lineHeight: 1.1,
                    fontWeight: 500,
                    color: "#111111",
                  }}
                >
                  {t("chefHighlight.titleLine1")}
                  <br />
                  {t("chefHighlight.titleLine2")}
                </Title>

                <Box
                  style={{
                    width: 110,
                    height: 2,
                    background: "#f5d300",
                  }}
                />

                <Text
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1rem, 1.2vw, 1.12rem)",
                    lineHeight: 1.95,
                    color: "#1f1a12",
                  }}
                >
                  {t("chefHighlight.text")}
                </Text>

                <Text
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
                    lineHeight: 1.9,
                    color: "#3b342d",
                    fontStyle: "italic",
                  }}
                >
                  {t("chefHighlight.quote")}
                </Text>

                <Box pt={6}>
                  <Button
                    component={motion.a}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/ristorante"
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
                    {t("chefHighlight.button")}
                  </Button>
                </Box>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
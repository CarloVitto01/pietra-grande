import {
  Anchor,
  Box,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function FooterLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
        <Anchor
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          underline="never"
          style={{
            color: "rgba(255, 244, 233, 0.82)",
            fontSize: "1rem",
            fontFamily: "Georgia, serif",
          }}
        >
          {label}
        </Anchor>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
      <Anchor
        component={Link}
        to={href}
        underline="never"
        style={{
          color: "rgba(255, 244, 233, 0.82)",
          fontSize: "1rem",
          fontFamily: "Georgia, serif",
        }}
      >
        {label}
      </Anchor>
    </motion.div>
  );
}

function FooterInfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Group align="flex-start" gap={10} wrap="nowrap">
      <Box
        style={{
          color: "#d7b18a",
          marginTop: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>

      <Text
        style={{
          color: "rgba(255, 244, 233, 0.82)",
          fontSize: "1rem",
          lineHeight: 1.7,
          fontFamily: "Georgia, serif",
        }}
      >
        {text}
      </Text>
    </Group>
  );
}

export default function SiteFooter() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      id="contatti"
      style={{
        background:
          "linear-gradient(180deg, #4a2f25 0%, #3b241d 55%, #2e1c17 100%)",
        padding: "64px 0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 35%)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" px="md" style={{ position: "relative", zIndex: 1 }}>
        <Grid gutter={{ base: 36, md: 56 }}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Stack gap={16}>
                <Image src={logo} alt="Pietra Grande" w={220} fit="contain" />

                <Text
                  style={{
                    color: "rgba(255, 244, 233, 0.82)",
                    fontSize: "1rem",
                    lineHeight: 1.9,
                    maxWidth: 420,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {t("footer.description")}
                </Text>
              </Stack>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.08 }}
            >
              <Stack gap={14}>
                <Title
                  order={4}
                  style={{
                    color: "#f2dfcf",
                    fontFamily: "Georgia, serif",
                    fontSize: "1.35rem",
                    fontWeight: 500,
                  }}
                >
                  {t("footer.explore")}
                </Title>

                <Stack gap={8}>
                  <FooterLink href="/" label={t("nav.home")} />
                  <FooterLink href="/camere" label={t("nav.rooms")} />
                  <FooterLink href="/ristorante" label={t("nav.restaurant")} />
                  <FooterLink href="/contatti" label={t("nav.contacts")} />
                </Stack>
              </Stack>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.16 }}
            >
              <Stack gap={14}>
                <Title
                  order={4}
                  style={{
                    color: "#f2dfcf",
                    fontFamily: "Georgia, serif",
                    fontSize: "1.35rem",
                    fontWeight: 500,
                  }}
                >
                  {t("footer.contactsTitle")}
                </Title>

                <Stack gap={10}>
                  <FooterInfoRow
                    icon={<IconMapPin size={18} stroke={1.8} />}
                    text={t("footer.address")}
                  />
                  <FooterInfoRow
                    icon={<IconPhone size={18} stroke={1.8} />}
                    text={t("footer.phone")}
                  />
                  <FooterInfoRow
                    icon={<IconMail size={18} stroke={1.8} />}
                    text={t("footer.email")}
                  />
                </Stack>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>

        <Divider my={28} color="rgba(255,255,255,0.12)" />

        <Group justify="space-between" gap="md" wrap="wrap">
          <Group gap={14} wrap="wrap">
            <Text
              style={{
                color: "rgba(255, 244, 233, 0.62)",
                fontSize: "0.95rem",
                fontFamily: "Georgia, serif",
              }}
            >
              © 2026 Pietra Grande. {t("footer.rights")}
            </Text>

            <Anchor
              component={Link}
              to="/privacy-policy"
              underline="never"
              style={{
                color: "rgba(255, 244, 233, 0.62)",
                fontSize: "0.95rem",
                fontFamily: "Georgia, serif",
              }}
            >
              {t("Privacy")}

            </Anchor>

            <Anchor
              component={Link}
              to="/cookie-policy"
              underline="never"
              style={{
                color: "rgba(255, 244, 233, 0.62)",
                fontSize: "0.95rem",
                fontFamily: "Georgia, serif",
              }}
            >
              {t("Cookie Policy")}
            </Anchor>
          </Group>

          <Text
            style={{
              color: "rgba(255, 244, 233, 0.52)",
              fontSize: "0.92rem",
              fontFamily: "Georgia, serif",
            }}
          >
            {t("footer.createdBy")}{" "}
            <Anchor
              href="https://photoandvision.it"
              target="_blank"
              rel="noopener noreferrer"
              underline="never"
              style={{
                color: "#f2dfcf",
                fontFamily: "Georgia, serif",
              }}
            >
              Photo & Vision
            </Anchor>
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
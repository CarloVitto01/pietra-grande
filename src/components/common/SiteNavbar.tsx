import {
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Anchor,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../../assets/images/logo.svg";

export default function SiteNavbar() {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();

  const links = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.rooms"), href: "/camere" },
    { label: t("nav.restaurant"), href: "/ristorante" },
    { label: t("nav.contacts"), href: "/contatti" },
  ];

  return (
    <>
      <Box
        component="header"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 30,
        }}
      >
        <Box
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(190deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 58%, rgba(255,255,255,0.55) 82%, rgba(255,255,255,0) 100%)",
            backdropFilter: "none",
            pointerEvents: "none",
          }}
        />

        <Container
          size="xl"
          px="md"
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: 18,
            paddingBottom: 18,
          }}
        >
          <Group justify="space-between" align="center" wrap="nowrap">
            <Anchor
              href="/"
              underline="never"
              style={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <Image
                src={logo}
                alt="Pietra Grande"
                h={58}
                w="auto"
                fit="contain"
              />
            </Anchor>

            <Group gap={26} visibleFrom="md" style={{ alignItems: "center" }}>
              {links.map((link) => {
                const isActive = location.pathname === link.href;

                return (
                  <motion.div
                    key={link.label}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Anchor
                      href={link.href}
                      underline="never"
                      style={{
                        position: "relative",
                        color: "#1f1a12",
                        fontSize: "0.98rem",
                        fontWeight: 500,
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <Box
                          style={{
                            position: "absolute",
                            left: 0,
                            bottom: -8,
                            width: "100%",
                            height: 2,
                            background: "#f5d300",
                            boxShadow: "0 0 12px rgba(245, 211, 0, 0.35)",
                          }}
                        />
                      )}
                    </Anchor>
                  </motion.div>
                );
              })}

              <LanguageSwitcher />
            </Group>

            <Group hiddenFrom="md" gap="xs" wrap="nowrap">
              <LanguageSwitcher />
              <Burger
                opened={opened}
                onClick={opened ? close : open}
                size="sm"
                color="#1f1a12"
              />
            </Group>
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="78%"
        padding="lg"
        withCloseButton={false}
        styles={{
          content: {
            background: "#ffffff",
          },
          body: {
            paddingTop: 40,
          },
        }}
      >
        <Stack gap="lg">
          {links.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Anchor
                key={link.label}
                href={link.href}
                underline="never"
                onClick={close}
                style={{
                  color: isActive ? "#b8893c" : "#1f1a12",
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  fontFamily: "Georgia, serif",
                }}
              >
                {link.label}
              </Anchor>
            );
          })}
        </Stack>
      </Drawer>
    </>
  );
}
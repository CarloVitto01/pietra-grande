import { Box, Burger, Container, Drawer, Group, Stack, Anchor, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../../assets/images/logo.svg";

export default function SiteNavbar() {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);

  const links = [
    { label: t("nav.home"), href: "/", active: true },
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
          padding: "18px 0",
        }}
      >
        <Container size="xl" px="md">
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

            <Group gap={26} visibleFrom="md">
              {links.map((link) => (
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
                      color: "#f5f1d6",
                      fontSize: "0.98rem",
                      fontWeight: 500,
                      fontFamily: "Georgia, serif",
                      textShadow: "0 1px 8px rgba(0,0,0,0.18)",
                    }}
                  >
                    {link.label}
                    {link.active && (
                      <Box
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: -8,
                          width: "100%",
                          height: 2,
                          background: "#f5d300",
                          boxShadow: "0 0 12px rgba(245, 211, 0, 0.45)",
                        }}
                      />
                    )}
                  </Anchor>
                </motion.div>
              ))}

              <LanguageSwitcher />
            </Group>

            <Group hiddenFrom="md" gap="xs" wrap="nowrap">
              <LanguageSwitcher />
              <Burger
                opened={opened}
                onClick={opened ? close : open}
                size="sm"
                color="#f5d300"
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
            background: "#111111",
          },
          body: {
            paddingTop: 40,
          },
        }}
      >
        <Stack gap="lg">
          {links.map((link) => (
            <Anchor
              key={link.label}
              href={link.href}
              underline="never"
              onClick={close}
              style={{
                color: "#f5f1d6",
                fontSize: "1.15rem",
                fontWeight: 500,
                fontFamily: "Georgia, serif",
              }}
            >
              {link.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
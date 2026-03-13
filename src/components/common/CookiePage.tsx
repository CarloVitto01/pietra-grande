import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import SiteNavbar from "../common/SiteNavbar";
import SiteFooter from "../common/SiteFooter";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap={10}>
      <Title
        order={2}
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)",
          fontWeight: 500,
          color: "#111111",
        }}
      >
        {title}
      </Title>
      <Box>{children}</Box>
    </Stack>
  );
}

const textStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "1rem",
  lineHeight: 1.9,
  color: "#1f1a12",
};

export default function CookiePage() {
  const { t } = useTranslation();

  return (
    <Box style={{ background: "#f4eee5", minHeight: "100vh" }}>
      <SiteNavbar />

      <Box
        component="section"
        style={{
          padding: "140px 0 80px",
          background: "linear-gradient(180deg, #f4eee5 0%, #efe5d8 100%)",
        }}
      >
        <Container size="md" px="md">
          <Stack gap={34}>
            <Stack gap={8}>
              <Title
                order={1}
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  lineHeight: 1,
                  fontWeight: 500,
                  color: "#111111",
                  fontStyle: "italic",
                }}
              >
                {t("cookie.title")}
              </Title>

              <Text style={textStyle}>{t("cookie.updated")}</Text>
            </Stack>

            <Section title={t("cookie.sections.whatAreCookies.title")}>
              <Text style={textStyle}>{t("cookie.sections.whatAreCookies.text")}</Text>
            </Section>

            <Section title={t("cookie.sections.types.title")}>
              <Text style={textStyle}>{t("cookie.sections.types.intro")}</Text>
              <Text style={textStyle}>{t("cookie.sections.types.technical")}</Text>
              <Text style={textStyle}>{t("cookie.sections.types.preferences")}</Text>
              <Text style={textStyle}>{t("cookie.sections.types.analytics")}</Text>
              <Text style={textStyle}>{t("cookie.sections.types.marketing")}</Text>
            </Section>

            <Section title={t("cookie.sections.legalBasis.title")}>
              <Text style={textStyle}>{t("cookie.sections.legalBasis.text")}</Text>
            </Section>

            <Section title={t("cookie.sections.consent.title")}>
              <Text style={textStyle}>{t("cookie.sections.consent.text1")}</Text>
              <Text style={textStyle}>{t("cookie.sections.consent.text2")}</Text>
            </Section>

            <Section title={t("cookie.sections.thirdParty.title")}>
              <Text style={textStyle}>{t("cookie.sections.thirdParty.text")}</Text>
            </Section>

            <Section title={t("cookie.sections.disable.title")}>
              <Text style={textStyle}>{t("cookie.sections.disable.text")}</Text>
            </Section>

            <Section title={t("cookie.sections.list.title")}>
              <Text style={textStyle}>{t("cookie.sections.list.text1")}</Text>
              <Text style={textStyle}>{t("cookie.sections.list.text2")}</Text>
              <Text style={textStyle}>{t("cookie.sections.list.text3")}</Text>
            </Section>

            <Section title={t("cookie.sections.contacts.title")}>
              <Text style={textStyle}>{t("cookie.sections.contacts.text")}</Text>
            </Section>
          </Stack>
        </Container>
      </Box>

      <SiteFooter />
    </Box>
  );
}
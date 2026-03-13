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

export default function PrivacyPage() {
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
                {t("privacy.title")}
              </Title>

              <Text style={textStyle}>{t("privacy.updated")}</Text>
            </Stack>

            <Section title={t("privacy.sections.owner.title")}>
              <Text style={textStyle}>{t("privacy.sections.owner.text1")}</Text>
              <Text style={textStyle}>{t("privacy.sections.owner.text2")}</Text>
              <Text style={textStyle}>{t("privacy.sections.owner.text3")}</Text>
            </Section>

            <Section title={t("privacy.sections.dataCollected.title")}>
              <Text style={textStyle}>{t("privacy.sections.dataCollected.intro")}</Text>
              <Text style={textStyle}>{t("privacy.sections.dataCollected.item1")}</Text>
              <Text style={textStyle}>{t("privacy.sections.dataCollected.item2")}</Text>
              <Text style={textStyle}>{t("privacy.sections.dataCollected.item3")}</Text>
            </Section>

            <Section title={t("privacy.sections.purposes.title")}>
              <Text style={textStyle}>{t("privacy.sections.purposes.intro")}</Text>
              <Text style={textStyle}>{t("privacy.sections.purposes.item1")}</Text>
              <Text style={textStyle}>{t("privacy.sections.purposes.item2")}</Text>
              <Text style={textStyle}>{t("privacy.sections.purposes.item3")}</Text>
              <Text style={textStyle}>{t("privacy.sections.purposes.item4")}</Text>
              <Text style={textStyle}>{t("privacy.sections.purposes.item5")}</Text>
              <Text style={textStyle}>{t("privacy.sections.purposes.item6")}</Text>
            </Section>

            <Section title={t("privacy.sections.legalBasis.title")}>
              <Text style={textStyle}>{t("privacy.sections.legalBasis.intro")}</Text>
              <Text style={textStyle}>{t("privacy.sections.legalBasis.item1")}</Text>
              <Text style={textStyle}>{t("privacy.sections.legalBasis.item2")}</Text>
              <Text style={textStyle}>{t("privacy.sections.legalBasis.item3")}</Text>
              <Text style={textStyle}>{t("privacy.sections.legalBasis.item4")}</Text>
            </Section>

            <Section title={t("privacy.sections.processingMethods.title")}>
              <Text style={textStyle}>{t("privacy.sections.processingMethods.text")}</Text>
            </Section>

            <Section title={t("privacy.sections.recipients.title")}>
              <Text style={textStyle}>{t("privacy.sections.recipients.text1")}</Text>
              <Text style={textStyle}>{t("privacy.sections.recipients.text2")}</Text>
            </Section>

            <Section title={t("privacy.sections.transfer.title")}>
              <Text style={textStyle}>{t("privacy.sections.transfer.text")}</Text>
            </Section>

            <Section title={t("privacy.sections.retention.title")}>
              <Text style={textStyle}>{t("privacy.sections.retention.text")}</Text>
            </Section>

            <Section title={t("privacy.sections.rights.title")}>
              <Text style={textStyle}>{t("privacy.sections.rights.text1")}</Text>
              <Text style={textStyle}>{t("privacy.sections.rights.text2")}</Text>
            </Section>

            <Section title={t("privacy.sections.complaint.title")}>
              <Text style={textStyle}>{t("privacy.sections.complaint.text")}</Text>
            </Section>

            <Section title={t("privacy.sections.changes.title")}>
              <Text style={textStyle}>{t("privacy.sections.changes.text")}</Text>
            </Section>
          </Stack>
        </Container>
      </Box>

      <SiteFooter />
    </Box>
  );
}


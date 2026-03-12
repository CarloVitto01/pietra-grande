import { Box, Container, Grid, Stack, Text, Title } from "@mantine/core";
import {
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import FadeIn from "../common/FadeIn";

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <Stack gap={10} align="center">
      <Box style={{ color: "#8b5e3c", display: "flex", alignItems: "center" }}>
        {icon}
      </Box>

      <Title
        order={3}
        ta="center"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.6rem, 2vw, 2.2rem)",
          lineHeight: 1.1,
          fontWeight: 500,
          color: "#111111",
        }}
      >
        {title}
      </Title>

      <Text
        ta="center"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
          lineHeight: 1.8,
          color: "#1f1a12",
          maxWidth: 220,
          whiteSpace: "pre-line",
        }}
      >
        {value}
      </Text>
    </Stack>
  );
}

export default function ContactsInfoStrip() {
  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "38px 0 34px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter={{ base: 28, md: 18 }} justify="center">
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <FadeIn delay={0.04}>
              <InfoItem
                icon={<IconMail size={34} stroke={1.8} />}
                title="Email"
                value="info@pietragrande.it"
              />
            </FadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <FadeIn delay={0.08}>
              <InfoItem
                icon={<IconPhone size={34} stroke={1.8} />}
                title="Telefono"
                value="+39 xxxx xxxxxx"
              />
            </FadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <FadeIn delay={0.16}>
              <InfoItem
                icon={<IconMapPin size={34} stroke={1.8} />}
                title="Indirizzo"
                value="Via Pantaniello 4, 73028 Otranto (LE)"
              />
            </FadeIn>
          </Grid.Col>


        </Grid>
      </Container>
    </Box>
  );
}
import type { ReactNode } from "react";
import { Box, Button, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import {
  IconBed,
  IconChefHat,
  IconChevronRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
  image: string;
  href?: string;
  delay?: number;
};

type Props = {
  roomImage: string;
  restaurantImage: string;
};

function FeatureCard({
  icon,
  title,
  description,
  buttonLabel,
  image,
  href = "#",
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
      style={{ height: "100%" }}
    >
      <Box
        style={{
          height: "100%",
          paddingTop: 8,
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <Box
            style={{
              height: 1,
              flex: 1,
              background: "#f4d400",
            }}
          />
          <Box
            style={{
              color: "#000000",
              display: "flex",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>
          <Box
            style={{
              height: 1,
              flex: 1,
              background: "#f4d400",
            }}
          />
        </Box>

        <Stack gap={14} align="center">
          <Title
            order={3}
            ta="center"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.8rem, 2.2vw, 2.6rem)",
              lineHeight: 1.12,
              fontWeight: 500,
              color: "#000000",
            }}
          >
            {title}
          </Title>

          <Text
            ta="center"
            style={{
              minHeight: 58,
              maxWidth: 420,
              fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
              lineHeight: 1.75,
              color: "#000000",
              fontFamily: "Georgia, serif",
            }}
          >
            {description}
          </Text>

          <Button
            component={motion.a}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={href}
            radius="xl"
            rightSection={<IconChevronRight size={15} stroke={1.8} />}
            style={{
              background: "#f4d400",
              color: "#000000",
              height: 46,
              paddingInline: 24,
              fontWeight: 700,
              fontSize: "0.86rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {buttonLabel}
          </Button>

          <Box
            style={{
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={image}
              alt={title}
              radius={0}
              h={360}
              fit="cover"
              w="100%"
            />
          </Box>
        </Stack>
      </Box>
    </motion.div>
  );
}

export default function FeatureCardsSection({
  roomImage,
  restaurantImage,
}: Props) {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "18px 0 70px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter={{ base: 40, md: 36 }} justify="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <FeatureCard
              icon={<IconBed size={32} stroke={1.7} />}
              title={t("features.roomsTitle")}
              description={t("features.roomsText")}
              buttonLabel={t("features.roomsButton")}
              image={roomImage}
              href="/camere"
              delay={0.05}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <FeatureCard
              icon={<IconChefHat size={32} stroke={1.7} />}
              title={t("features.restaurantTitle")}
              description={t("features.restaurantText")}
              buttonLabel={t("features.restaurantButton")}
              image={restaurantImage}
              href="/ristorante"
              delay={0.15}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
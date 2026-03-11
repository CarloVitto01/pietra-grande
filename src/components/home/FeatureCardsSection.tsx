import type { ReactNode } from "react";
import { Box, Button, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import {
  IconBed,
  IconChefHat,
  IconTrees,
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
  natureImage: string;
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
            marginBottom: 16,
          }}
        >
          <Box
            style={{
              height: 1,
              flex: 1,
              background: "rgba(103, 76, 55, 0.18)",
            }}
          />
          <Box
            style={{
              color: "#6e5344",
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
              background: "rgba(103, 76, 55, 0.18)",
            }}
          />
        </Box>

        <Stack gap={12} align="center">
          <Title
            order={3}
            ta="center"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.55rem, 2vw, 2.15rem)",
              lineHeight: 1.15,
              fontWeight: 500,
              color: "#4c3126",
            }}
          >
            {title}
          </Title>

          <Text
            ta="center"
            style={{
              minHeight: 54,
              maxWidth: 310,
              fontSize: "clamp(0.98rem, 1.15vw, 1.06rem)",
              lineHeight: 1.7,
              color: "#5f473a",
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
            radius={0}
            rightSection={<IconChevronRight size={15} stroke={1.8} />}
            style={{
              background: "#8a5d3b",
              color: "#fff7ef",
              height: 44,
              paddingInline: 20,
              fontWeight: 600,
              fontSize: "0.84rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {buttonLabel}
          </Button>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            style={{ width: "100%", overflow: "hidden" }}
          >
            <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}>
              <Image
                src={image}
                alt={title}
                radius={0}
                h={260}
                fit="cover"
                w="100%"
              />
            </motion.div>
          </motion.div>
        </Stack>
      </Box>
    </motion.div>
  );
}

export default function FeatureCardsSection({
  roomImage,
  restaurantImage,
  natureImage,
}: Props) {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "8px 0 56px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <FeatureCard
              icon={<IconBed size={30} stroke={1.7} />}
              title={t("features.roomsTitle")}
              description={t("features.roomsText")}
              buttonLabel={t("features.roomsButton")}
              image={roomImage}
              href="#camere"
              delay={0.05}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <FeatureCard
              icon={<IconChefHat size={30} stroke={1.7} />}
              title={t("features.restaurantTitle")}
              description={t("features.restaurantText")}
              buttonLabel={t("features.restaurantButton")}
              image={restaurantImage}
              href="#ristorante"
              delay={0.15}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <FeatureCard
              icon={<IconTrees size={30} stroke={1.7} />}
              title={t("features.natureTitle")}
              description={t("features.natureText")}
              buttonLabel={t("features.natureButton")}
              image={natureImage}
              href="#attivita"
              delay={0.25}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
import { Box, Container, Grid, Image, Stack, Title } from "@mantine/core";
import FadeIn from "../common/FadeIn";

type Highlight = {
  image: string;
  title: string;
};

type Props = {
  items: Highlight[];
};

function HighlightCard({ image, title, delay }: Highlight & { delay: number }) {
  return (
    <FadeIn delay={delay}>
      <Stack gap={14} align="center">
        <Box
          style={{
            width: 196,
            height: 196,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #f5d300",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            flexShrink: 0,
          }}
        >
          <Image
            src={image}
            alt={title}
            w="100%"
            h="100%"
            fit="cover"
            radius={0}
          />
        </Box>

        <Title
          order={3}
          ta="center"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.5rem, 2vw, 2.2rem)",
            lineHeight: 1.15,
            fontWeight: 500,
            color: "#111111",
          }}
        >
          {title}
        </Title>

        <Box
          style={{
            width: 90,
            height: 2,
            background: "#f5d300",
          }}
        />
      </Stack>
    </FadeIn>
  );
}

export default function RestaurantHighlightsSection({ items }: Props) {
  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "18px 0 38px",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter={{ base: 34, md: 24 }}>
          {items.map((item, index) => (
            <Grid.Col key={item.title} span={{ base: 12, md: 4 }}>
              <HighlightCard
                image={item.image}
                title={item.title}
                delay={0.04 * (index + 1)}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
import { Box, Container, Grid, List, Stack, Text, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function RoomsInfoSection() {
  return (
    <Box
      component="section"
      style={{
        background: "#f4eee5",
        padding: "56px 0 36px",
      }}
    >
      <Container size="xl" px="md">
        <Grid gutter={{ base: 28, md: 56 }} align="start">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Stack gap={18}>
                <Title
                  order={2}
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2rem, 3vw, 3.2rem)",
                    lineHeight: 1.12,
                    fontWeight: 500,
                    color: "#4c3126",
                  }}
                >
                  Camere Accoglienti e Confortevoli
                </Title>

                <Text
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1rem, 1.2vw, 1.12rem)",
                    lineHeight: 1.9,
                    color: "#5e473b",
                    maxWidth: 720,
                  }}
                >
                  Le camere del nostro agriturismo sono arredate con gusto e
                  dotate di tutti i comfort per offrirti un soggiorno rilassante
                  e piacevole. L’atmosfera calda, autentica e accogliente rende
                  ogni ambiente il luogo ideale per rigenerarsi e vivere la
                  campagna con semplicità ed eleganza.
                </Text>
              </Stack>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              <Box
                style={{
                  paddingTop: 8,
                }}
              >
                <List
                  spacing="md"
                  icon={<IconCheck size={18} stroke={2} color="#6f4a33" />}
                  styles={{
                    itemLabel: {
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(1rem, 1.2vw, 1.12rem)",
                      color: "#4f3a30",
                      lineHeight: 1.7,
                    },
                  }}
                >
                  <List.Item>Wi-Fi gratuito</List.Item>
                  <List.Item>Aria condizionata</List.Item>
                  <List.Item>TV a schermo piatto</List.Item>
                  <List.Item>Bagno privato con doccia</List.Item>
                </List>
              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
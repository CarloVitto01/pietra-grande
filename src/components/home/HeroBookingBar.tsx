import { Box, Button, Group, Text } from "@mantine/core";
import { IconCalendarCheck, IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const bookingUrl = "https://agriturismopietragrande.kross.travel/";

export default function HeroBookingBar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            style={{
                width: "100%",
            }}
        >
            <Box
                style={{
                    width: "100%",
                    maxWidth: 980,
                    background: "#ffffff",
                    boxShadow: "0 18px 45px rgba(0, 0, 0, 0.18)",
                    padding: "18px 22px",
                }}
            >
                <Group justify="space-between" align="center" gap={24} wrap="wrap">
                    <Group gap={16} align="center">
                        <Box
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: "50%",
                                background: "#f4d400",
                                color: "#000000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <IconCalendarCheck size={25} stroke={1.8} />
                        </Box>

                        <Box>
                            <Text
                                style={{
                                    fontSize: 12,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    color: "rgba(0,0,0,0.48)",
                                    fontWeight: 800,
                                    marginBottom: 3,
                                }}
                            >
                                Booking online
                            </Text>

                            <Text
                                style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: "clamp(1.15rem, 1.7vw, 1.55rem)",
                                    color: "#2b160f",
                                    lineHeight: 1.2,
                                    fontWeight: 500,
                                }}
                            >
                                Verifica disponibilità e prenota il tuo soggiorno
                            </Text>
                        </Box>
                    </Group>

                    <Button
                        component="a"
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        radius={0}
                        rightSection={<IconChevronRight size={16} stroke={1.8} />}
                        style={{
                            height: 54,
                            background: "#452820",
                            color: "#ffffff",
                            paddingInline: 30,
                            fontWeight: 700,
                            fontSize: 15,
                            whiteSpace: "nowrap",
                        }}
                    >
                        Verifica disponibilità
                    </Button>
                </Group>
            </Box>
        </motion.div>
    );
}
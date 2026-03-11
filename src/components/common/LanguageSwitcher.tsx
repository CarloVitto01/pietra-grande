import { SegmentedControl } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <SegmentedControl
      value={i18n.language.startsWith("en") ? "en" : "it"}
      onChange={(value) => i18n.changeLanguage(value)}
      data={[
        { label: "IT", value: "it" },
        { label: "EN", value: "en" },
      ]}
      radius={0}
      size="xs"
      styles={{
        root: {
          background: "rgba(255,255,255,0.35)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(90,57,39,0.18)",
        },
        label: {
          fontWeight: 600,
          color: "#000000",
        },
        indicator: {
          background: "#f5d300",
        },
      }}
    />
  );
}
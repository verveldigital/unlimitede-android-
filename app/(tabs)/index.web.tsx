import { createElement } from "react";
import type { CSSProperties } from "react";
import { Linking, View } from "react-native";

const SITE_URL = "https://unlimitede-hj25vd9j.manus.space";

const frameStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  border: 0,
  display: "block",
};

const openLinkStyle: CSSProperties = {
  position: "absolute",
  right: 12,
  bottom: 12,
  padding: "10px 14px",
  borderRadius: 10,
  backgroundColor: "#111827",
  color: "#F8FAFC",
  fontFamily: "Roboto, sans-serif",
  fontSize: 13,
  textDecoration: "none",
};

export default function HomeScreenWeb() {
  const siteFrame = createElement("iframe", {
    title: "Unlimitede",
    src: SITE_URL,
    allow: "clipboard-read; clipboard-write",
    style: frameStyle,
  });

  const openLink = createElement(
    "a",
    {
      href: SITE_URL,
      target: "_blank",
      rel: "noreferrer",
      style: openLinkStyle,
      onClick: (event) => {
        event.preventDefault();
        void Linking.openURL(SITE_URL).catch(() => undefined);
      },
    },
    "Open Unlimitede in a new tab",
  );

  return (
    <View style={{ flex: 1, minHeight: 0, backgroundColor: "#111827" }}>
      {siteFrame}
      {openLink}
    </View>
  );
}

import Assets from "@/constant/assets";
import { appMaxWidth } from "@/constant/size";
import Text from "../text";
import colors from "@/constant/colors";

const socialMedias = [
  {
    link: "https://instagram.com",
    src: Assets.ig,
    alt: "instagram",
  },
  {
    link: "https://facebook.com",
    src: Assets.fb,
    alt: "facebook",
  },
  {
    link: "https://x.com",
    src: Assets.twt,
    alt: "X",
  },
];

export default function Footer() {
  return (
    <div id="footer" style={styles.footerContainer}>
      <div id="main-inner-container" style={styles.footerInnerContainer}>
        <div id="social-media-container" style={styles.socialMediaContainer}>
          {socialMedias.map((sm) => {
            return (
              <img
                key={sm.alt}
                src={sm.src}
                alt={sm.alt}
                onClick={() => {
                  window.open(sm.link, "_blank");
                }}
                style={styles.icon}
              />
            );
          })}
        </div>
        <div style={styles.copyrightContainer}>
          <Text textColor="--unnamed-color-ffffff">Terms & Condition</Text>
          <div style={styles.vertical} />
          <Text textColor="--unnamed-color-ffffff">
            Copyright &copy; 2018. All rights reserved. PT Radya Gita Bahagi
          </Text>
        </div>
      </div>
    </div>
  );
}

const styles = {
  footerContainer: {
    backgroundColor: "#232323",
    color: "#FFFFFF",
  } as React.CSSProperties,
  footerInnerContainer: {
    height: 100,
    padding: 16,
    margin: "auto",
    maxWidth: appMaxWidth,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,
  icon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  } as React.CSSProperties,
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 34,
    alignItems: "center",
    flex: 1,
  } as React.CSSProperties,
  vertical: {
    minWidth: 1,
    minHeight: 16,
    backgroundColor: colors["--unnamed-color-ffffff"],
  } as React.CSSProperties,
  copyrightContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 28,
  } as React.CSSProperties,
};

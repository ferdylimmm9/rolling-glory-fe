import Assets from "@/constant/assets";
import { appMaxWidth } from "@/constant/size";
import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const { push } = useRouter();
  return (
    <div id="header" style={style.appHeaderContainer}>
      <div id="header-inner-container" style={style.appHeaderInnerContainer}>
        <img
          src={Assets.logoDummy}
          alt="rolling-glory"
          width={100}
          style={style.logo}
          onClick={() => push("/")}
        />
      </div>
    </div>
  );
}

const style = {
  appHeaderContainer: {
    position: "sticky",
    left: 0,
    right: 0,
    top: 0,
    height: 64,
    zIndex: 10,
    backgroundColor: "white",
  } as React.CSSProperties,
  appHeaderInnerContainer: {
    margin: "auto",
    height: 64,
    display: "flex",
    alignItems: "center",
    maxWidth: appMaxWidth,
  } as React.CSSProperties,
  logo: {
    cursor: "pointer",
  } as React.CSSProperties,
};

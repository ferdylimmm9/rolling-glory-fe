import Assets from "@/constant/assets";
import Header from "./header";
import Footer from "./footer";

interface AppLayoutProps {
  children: React.ReactNode;
}
const maxWidth = 1280;
export default function AppLayout(props: AppLayoutProps) {
  return (
    <div
      id="app-container"
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Header />
      <div
        id="main"
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <img
          src={Assets.pattern}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        />
        <div
          id="main-inner-container"
          style={{
            padding: 16,
            margin: "auto",
            backgroundColor: "transparent",
            maxWidth,
          }}
        >
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

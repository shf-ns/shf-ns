import avatar from "@/assets/img/avatar.webp";
import type { ReactNode } from "react";

function Avatar(): ReactNode {
  return (
    <img src={avatar} style={{ width: "100%", height: "100%" }} alt="avatar" />
  );
}
export default Avatar;

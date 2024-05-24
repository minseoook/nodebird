"use client";

import style from "./trendSection.module.css";
import Trend from "@/app/(afterLogin)/_component/Trend";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function TrendSection() {
  const pathname = usePathname();
  const { data: session } = useSession();
  if (pathname === "/explore") return null;
  if (!session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>트렌드를 가져올수 없다</div>
      </div>
    );
  }
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}

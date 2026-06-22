"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CONVERSION_SEND_TO = "AW-18222698231/LNtkCMGRjrscEPedofFD";

export default function GoogleAdsConversion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: CONVERSION_SEND_TO });
    }
  }, [pathname]);

  return null;
}

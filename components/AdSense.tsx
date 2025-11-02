"use client";

import { useEffect } from "react";

interface AdSenseProps {
  slot?: string;
  format?: string;
  style?: React.CSSProperties;
  responsive?: boolean;
  className?: string;
}

export default function AdSense({
  slot = "",
  format = "auto",
  style = { display: "block" },
  responsive = true,
  className = "",
}: AdSenseProps) {
  const adsenseId = "ca-pub-2248445708639121";
  const isProduction = process.env.NODE_ENV === "production";

  useEffect(() => {
    if (typeof window !== "undefined" && isProduction) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, [isProduction]);

  if (!isProduction) {
    return null;
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={adsenseId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}

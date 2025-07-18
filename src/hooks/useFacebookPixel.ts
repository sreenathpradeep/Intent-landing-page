import { useEffect } from "react";

declare global {
  interface Window {
    fbq: any;
  }
}

export const useFacebookPixel = () => {
  const trackEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName, parameters);
    }
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent("ViewContent", {
      content_name: sectionName,
      content_category: "Section View",
      value: 1,
      currency: "USD",
    });
  };

  return { trackEvent, trackSectionView };
};

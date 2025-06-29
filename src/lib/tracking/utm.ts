// src/lib/tracking/utm.ts
export const captureUTMParameters = () => {
    const urlParams = new URLSearchParams(window.location.search);
  
    const utmData = {
      utm_source: urlParams.get("utm_source"),
      utm_medium: urlParams.get("utm_medium"),
      utm_campaign: urlParams.get("utm_campaign"),
      utm_content: urlParams.get("utm_content"),
      utm_term: urlParams.get("utm_term"),
      timestamp: Date.now(),
      expires: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days
    };
  
    if (!localStorage.getItem("hushrealm_utm_first_touch")) {
      localStorage.setItem("hushrealm_utm_first_touch", JSON.stringify(utmData));
    }
  
    localStorage.setItem("hushrealm_utm_current", JSON.stringify(utmData));
  };
  
  export const getUTMParam = (key: string): string | null => {
    const utm = JSON.parse(localStorage.getItem("hushrealm_utm_first_touch") || "{}");
    return utm[key] || null;
  };

  
// src/lib/tracking/redtrack.ts
export const storeRedTrackClickID = () => {
    const params = new URLSearchParams(window.location.search);
    const clickId = params.get("clickid") || params.get("rt_click_id");
  
    if (clickId) {
      localStorage.setItem("hushrealm_click_id", clickId);
    }
  };
  
  export const getStoredClickId = (): string | null => {
    return localStorage.getItem("hushrealm_click_id") || null;
  };
  
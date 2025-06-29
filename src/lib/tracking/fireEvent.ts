// src/lib/tracking/fireEvent.ts
import { getStoredClickId } from "./redtrack";
import { getUTMParam } from "./utm";

interface EventData {
  [key: string]: string | number | null;
}

export const fireRedTrackEvent = (eventName: string, eventData: EventData = {}) => {
  const payload = {
    event_name: eventName,
    click_id: getStoredClickId(),
    utm_source: getUTMParam("utm_source"),
    utm_medium: getUTMParam("utm_medium"),
    utm_campaign: getUTMParam("utm_campaign"),
    utm_content: getUTMParam("utm_content"),
    utm_term: getUTMParam("utm_term"),
    page_url: window.location.href,
    timestamp: Date.now(),
    ...eventData,
  };

  fetch("https://track.hushrealm.com/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => console.error("RedTrack event error:", err));
};

import { useOnlineStatus } from "./use-online-status";

export default function StatusBar() {
  const {isOnline} = useOnlineStatus();

  return (
    <h3>{isOnline ? "✅ Online" : "❌ Disconnected"}</h3>
  );
}
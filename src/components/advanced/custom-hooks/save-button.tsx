import { useOnlineStatus } from "./use-online-status";

export default function SaveButton() {
  const {isOnline, setIsOnline} = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
    setIsOnline(false);
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
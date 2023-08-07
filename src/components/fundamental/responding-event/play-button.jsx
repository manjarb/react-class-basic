import { Button } from "./button";

export function PlayButton() {
  const handleOnPress = () => {
    alert('Onpress')
  }

  return <Button onPress={handleOnPress}></Button>
}



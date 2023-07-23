export function Button({ content, onPress }) {
  function handleClick() {
    alert(`content: ${content}`);
  }

  return (
    <button
      onClick={() => onPress()}
    >
      Click me
    </button>
  );
}

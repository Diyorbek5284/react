import { useRef } from "react";

export default function TextInputWithFocusButton(props) {
    const inputEl = useRef(null);
    console.log(props.sharedCount);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
      console.log(inputEl.current.value);
    };

    // props drilling

    return (
      <>
        <input ref={inputEl} value={props.sharedCount} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
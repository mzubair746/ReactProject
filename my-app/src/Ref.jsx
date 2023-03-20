import { useReducer } from 'react';

function textReducer(state, action) {
  if (action.type === 'UPPERCASE') {
    return state.toUpperCase();
  }
  if (action.type === 'LOWERCASE') {
    return state.toLowerCase();
  }
  if (action.type === 'SET_TEXT') {
    return action.value;
  }
  return state;
}

function Ref() {
  const [text, dispatch] = useReducer(textReducer, '');

  function handleInputChange(event) {
    dispatch({ type: 'SET_TEXT', value: event.target.value });
  }

  function handleUppercaseClick() {
    dispatch({ type: 'UPPERCASE' });
  }

  function handleLowercaseClick() {
    dispatch({ type: 'LOWERCASE' });
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleUppercaseClick}>Uppercase</button>
      <button onClick={handleLowercaseClick}>Lowercase</button>
      <p>{text}</p>
    </div>
  );
}
export default Ref;
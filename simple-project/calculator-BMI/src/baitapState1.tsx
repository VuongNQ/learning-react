import { SetStateAction, useState } from 'react';
//Bai tap tranh mau thuan trong ma
function BaiTapState1() {
  const [answer, setAnswer] = useState('');
  const [typing, setTyping] = useState('typing');

  const handleTextarea = (event: { target: { value: SetStateAction<string>; }; }) => {
    setAnswer(event.target.value)
  }
  const sending = typing === "sending";
  const sent = typing === "sent";
  if(sent) {
    return <h1>Success</h1>
  }
  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setTyping('sending');
    await senWait(answer);
    setTyping('sent');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>How was your stay at The Prancing Pony?</h1>
      <textarea value={answer} onChange={handleTextarea} name="" id="" cols="30" rows="10"></textarea>
      <button type='submit' disabled={sending} >Send</button>
      {
        sending && <p>sending...</p>
      }
    </form>
  );
}

function senWait(answer) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
  })
}
export default BaiTapState1;
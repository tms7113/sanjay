import {useState} from 'react';
function Message()
{
    const [showMessage,setshowMessage] = useState(false);

    function toggleMessage()
    {
        setshowMessage(!showMessage);
    }

    return(
        <div style={{textAlign:"center",fontSize:"25px",color:"black",height:"700px"}}>
        <button onClick={toggleMessage}>
            {showMessage ? 'HideMessage' : 'ShowMessage'}
        </button>
        {showMessage && <p>Hi! How are you!!!</p>}
         
        </div>
    )
}
export default Message;
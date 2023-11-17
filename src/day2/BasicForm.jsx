import {useState} from "react";
function BasicForm()
{
    const [nam , setName] = useState('');
    const [mail , setMail] = useState('');
    const [txt , setTxt] = useState('');

    function print()
    {
        console.log(nam);
        console.log(mail);
        console.log(txt);
    }

    return(
        <div className="form" style={{ height: '700px',textAlign:"center",backgroundColor:"grey",color:"black" }} onSubmit={(e) => e.preventDefault() }>
  {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
    <form className="inner">
      <div>Basic Form</div>
        <label for='name' style={{color:"blueviolet"}}>Name:</label>
        <input type="text" id='name' name="name" value={nam} onChange={(e) => setName(e.target.value)} />
        <br/>
        <label for="email"style={{color:"blue"}}>Email:</label>
        <input type="email" id="email" name="email" value={mail} onChange={(e) => setMail(e.target.value)} />
        <br/>
     
        <label for="msg"style={{color:"green"}}>Message:</label>
        <textarea name="txt" id="msg" value={txt} onChange={(e) => setTxt(e.target.value)}></textarea>
        <br/>
        <button type="submit" onClick={print}style={{color:"red"}}>Submit</button>
     
    </form>
  {/* </div> */}
</div>

    )
}
export default BasicForm;
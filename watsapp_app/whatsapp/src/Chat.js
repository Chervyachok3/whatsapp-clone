import { Avatar, IconButton } from '@mui/material'
import {useEffect,useState} from 'react'
import { SearchOutlined } from '@mui/icons-material';
import { AttachFile } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import "./Chat.css"
import { InsertEmoticon } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import {useParams} from 'react-router-dom'
import db from './firebase';

function Chat() {

    const [seed,setSeed] = useState("");
    const [input,setInput] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(()=>{
    if(roomId){
            db.collection('rooms').doc(roomId).
            onSnapshot(snapshot => (
             setRoomName(snapshot.data().name)
    ))
    }
    },[roomId])
  
    useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000))
    },[roomId]);

    const sendmessage = (e) => {
        e.preventDefault();
        console.log("You typed --- ",input);
        setInput("");
    }

  return (
    <div className="chat">
        <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen....</p>
            </div>

            <div className="chat__headerRight">
            <IconButton>
                    <SearchOutlined/>
                </IconButton>
                
                <IconButton>
                    <AttachFile/>
                </IconButton>
                
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>

        <div className="chat__body">
        <p className={`chat__message ${true  && 'chat__receiver'}`}>
        <span className="chat__name">Alibek Maratov</span>
            Hey guys
            <span className='chat__timestamp'>3:32</span>
        </p>

        </div>

        <div className="chat__footer">
        <InsertEmoticon/>
        <form>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message'/>
            <button type='submit' onClick={sendmessage}>Send a message</button>
        </form>
        <MicIcon/>
        </div>
    </div>
  )
}

export default Chat
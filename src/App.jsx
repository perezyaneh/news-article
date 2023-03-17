import { useState, useEffect } from 'react'
import Modal from './Modal';
import Records from './MOCK_DATA.json'


function App() {
  
  //use state to open and close modal
  const [openModal, setOpenModal] = useState(false);
  //use state to grab user info from json file and set user info from json file
  const [user, setUser] = useState([]);
  //
  const [userId, setId] = useState(0)
  //handle users that is passed on modal
  const handleUser = (id) =>{
    setOpenModal(true)
    setUser(id)
  }

  const handleId = (id) => {
    setId(id)
    console.log(id)
    console.log(userId)
  }

  function handleDelete(){
    document.getElementById(userId).style.display = "none"
    
  }

  return (
    <div>
        <div className='container'>
          <h1>News Article</h1>
        <div className="button-head">
          <div>
            <input type="checkbox"></input>
            <button className='publish'>Publish</button>
            <button className='delete' onClick={handleDelete}>Delete</button>
          </div>
          <div>
            <input className='search-bar' type="text" placeholder='Search...'></input>
          </div>
        </div>
        { Records && Records.map(record => {
          return(
            <div className="card" key={record.id}  id={record.id}>
          <div className="card-title">
            <img src="src\assets\drag.png"></img>
            <input type="checkbox" onClick={() => handleId(record.id)}></input>
            <p>{record.title}</p>
          </div>
          <div className="card-subtitle">
            <img src="src\assets\user.png"></img>
            <p>{record.author}</p>
            <img src="src\assets\calendar.png"></img>
            <p>{record.date}</p>
          </div>
          <div className="card-content">
            <p className='content-text'>{record.content}</p>
            <img src="src\assets\visibility.png"></img>
            <button className='read-full' onClick={() => handleUser(record)}>Read Full</button>
          </div>
        </div>
          )
        })}
        
        {openModal && <Modal user={user} closeModal={setOpenModal}/>}
        </div>
    </div>
  )
}

export default App

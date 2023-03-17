import React from 'react'

function Modal({closeModal, user}) {
  return (
    <div className='bg-modal'>
    <div className='modal-container'>
    <div className='container-modal'>
      <div className="modal-title">
        <p>{user.title}</p>
        <button className='exit-button' onClick={() => closeModal(false)}>X</button>
      </div>
      <div className="modal-subtitle">
        <p>{user.author}</p>
        <p>{user.date}</p>
      </div>
      <div className="modal-content">
        <p>{user.content}</p>
      </div>
      <div className="modal-button">
        <button className='publish'>Publish</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Modal
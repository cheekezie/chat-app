import { PictureOutlined, SendOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { isTyping, sendMessage } from 'react-chat-engine';

const MessageForm = (props) => {
    const {chatId, creds} = props;
    const [value, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if(text.length > 0){
            sendMessage(creds, chatId, {text});
            setInputValue('');
        }
    }
    const handleTextCchange = (event) => {
        setInputValue(event.target.value);
        isTyping(props, chatId);

    }

    const handleupload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''});
    }
  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input type="text" className='message-input' value={value} 
      placeholder='Your message here' onChange={handleTextCchange} 
      onSubmit={handleSubmit}/>
      <label htmlFor="upload-button">
          <span className='image-button'>
              <PictureOutlined className='picture-icon'/>
          </span>
      </label>
      <input type="file" multiple={false} id="upload-button" style={{display: 'none'}} onChange={handleupload} />
      <button className='send-button' type='submit'>
        <SendOutlined className='send-icon'/>
      </button>
    </form>
  )
}

export default MessageForm

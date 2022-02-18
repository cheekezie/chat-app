import React from 'react';

const TheirMssages = ({ message, lastMessage }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className='message-row'>
      <div
          className='message-avatar'
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      {message?.attachments?.length > 0 ? (
        <img
          src={message?.attachments[0].file}
          alt='message attachment'
          className='message-image'
          style={{ marginLeft: '4px'}}
        />
      ) : (
        <div
          className='message'
          style={{
            float: 'float',
            color: 'white',
            backgroundColor: '#CABCDC',
            marginLeft: '4px'
          }}
          dangerouslySetInnerHTML={{ __html: message?.text }}
        ></div>
      )}
    </div>
  );
};

export default TheirMssages;

import React from 'react';

const TheirMssages = ({ message, lastMessage }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className='message-row'>
      {!isFirstMessageByUser && (
        <div
          className='message-avatar'
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message?.attachments[0].file}
          alt='message attachment'
          className='message-image'
          style={{ marginLeft: !isFirstMessageByUser ? '40x' : '40px' }}
        />
      ) : (
        <div
          className='message'
          style={{
            float: 'float',
            color: 'white',
            backgroundColor: '#CABCDC',
            marginLeft: !isFirstMessageByUser ? '40x' : '40px',
          }}
          dangerouslySetInnerHTML={{ __html: message?.text }}
        ></div>
      )}
    </div>
  );
};

export default TheirMssages;

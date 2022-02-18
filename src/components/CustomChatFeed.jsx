import MessageForm from './MessageForm';
import MyMessages from './MyMessages';
import TheirMssages from './TheirMssages';

const CustomChatFeed = (props) => {
  const { userName, chats, activeChat, messages } = props;
  // active chat is a key to to map the activechat from chats field
  const chat = chats && chats[activeChat];

  const renderMessges = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {isMyMessage ? (
              <MyMessages message={message} />
            ) : (
              <TheirMssages
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className='read-recipts'
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px',
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`key_${index}`}
            className='read-receipt'
            style={{
              float: isMyMessage ? 'right' : 'left',
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          ></div>
        )
    );
  };

  if (!chat) return 'Loading messages...';
  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat?.title}</div>
        <div className='chat-subtitle'>
          {chat.people
            .slice(0, 4)
            .map(
              (person, index) =>
                `${person.person.username}${
                  index === chat.people.length - 1 ? '' : ', '
                }`
            )}
          {chat.people && chat.people.length > 4
            ? `and ${chat.people.length - 4} other(s)`
            : ''}
        </div>
      </div>
      {renderMessges()}
      <div style={{ height: '100px' }} />
      <div className='message-form-container'>
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default CustomChatFeed;

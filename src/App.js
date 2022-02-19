import { ChatEngine } from 'react-chat-engine';
import './App.scss';
import CustomChatFeed from './components/CustomChatFeed';
import LoginForm from './components/LoginForm';


function App() {
  if(!localStorage.getItem('auth')) return <LoginForm />
  const auth = JSON.parse(localStorage.getItem('auth'));
  return (
    <ChatEngine
      height="100vh"
      projectID={auth['Project-ID']}
      userName={auth['User-Name']}
      userSecret={auth['User-Secret']}
      renderChatFeed={(chatAppProps)=>
        <CustomChatFeed {...chatAppProps} />
      }
    />
  );
}

export default App;

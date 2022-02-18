import { ChatEngine } from 'react-chat-engine';
import './App.scss';
import CustomChatFeed from './components/CustomChatFeed';


function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="30af4882-f6aa-4f4b-8aa5-22e51f797963"
      userName='sisco'
      userSecret='123'
      renderChatFeed={(chatAppProps)=>
        <CustomChatFeed {...chatAppProps} />
      }
    />
  );
}

export default App;

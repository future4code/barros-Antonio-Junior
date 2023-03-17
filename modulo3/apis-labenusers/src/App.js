import React,{useState} from 'react';
import UserRegistration from './Components/UserRegistration/UserRegistration';
import ListUser from './Components/ListUser/ListUser';


function App() {
    const [screen, setScreen] = useState('start')

      const changeScreen = (screen) =>{
          setScreen(screen)
      }

      const renderScreen = () =>{
          switch (screen) {
              case 'start':
                  return <UserRegistration changeScreen={changeScreen}/>
              case 'list':
                  return <ListUser changeScreen={changeScreen} />  
              default:
                  return null;      
          }
      }

      return (
        <div>
          {renderScreen()}
        </div>
      );
}

export default App;

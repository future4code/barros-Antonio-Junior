import React from 'react';
import Post from './components/Post/Post';
import Post1  from './components/Post/Post1';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          
          <Post1>
          nomeUsuario={'Marcos'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          </Post1>
}


export default App;

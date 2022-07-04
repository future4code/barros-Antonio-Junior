import React from 'react';
import Post from './components/Post/Post';
import Post1 from './compoments/Post/Post1';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
  </div>

<div className='MainContainer'>
<Post1
 nomeUsuario1={'paulinha'}
 fotoUsuario1={'https://picsum.photos/50/50'}
 fotoPost1={'https://picsum.photos/200/150'}
/>
</div>
)

}


export default App;

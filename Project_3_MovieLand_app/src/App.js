import React from 'react'
import Movie from './components/Movie'
import batman from './assets/batman.png' ;

import SearchBar  from './components/SearchBar';
import './App.css'
const App = () =>{


    return (

        <>
        
    <div className='fullMovieApp'>
<SearchBar></SearchBar>
    <div className='movieRow'>

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />
</div>

 <div className='movieRow'>

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />
</div>


<div className='movieRow'>

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />

<Movie moviePic={batman} movieDescription={"a beautiful movie for kids"} title={"Movie"} />
</div>


    </div>

        
        </>
    )
}

export default App 

const Playlists = () => {

  return (
    <nav className="mx-6 mt-2 py-2  flex-auto border-t border-white border-opacity-20 overflow-auto"> 
        <ul>
          {
            new Array(350).map((i)=>{
              
            <li key={i}>
              <a href="#" className="text-sm text-link hover:text-white"> Alma</a>
            </li>
})
          }
         </ul>
        </nav>
  )
}

export default Playlists
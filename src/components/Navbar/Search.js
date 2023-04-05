import {Icon} from '../../icons';


const Search = () => {
  return (
    <div className="mr-auto ml-4  relative">
        

        <label htmlFor='search-input' className='text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0'>
        <Icon size={24} name="search"/>
        </label>

        <input id='search-input' type='text' className="max-w-full w-[22.75rem] text-black bg-white h-10 pl-12 rounded-3xl text-sm" placeholder="What do you want to listen to?"/>
    </div>
  )
}

export default Search
import categories from "data/categories";


function Category({category}){
return(
  <div style={{'background':category.color}} className="rounded-md before:pt-[100%] before:block relative"
  >
    <div className="absolute inset-0 overflow-hidden">
    <h3 className="p-4 text-2xl tracking-tighter font-semibold">
    {category.title}
    </h3>
    <img src={category.cover} className=" shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y[-5%] absolute bottom-o right-0"/>
    </div>
  </div>
)
}


const Search = () => {
  return (
   <>
   <h1 className="text-2xl font-bold text-white pt-10 pb-4">Browse all</h1>
   <div className="grid grid-cols-5 gap-6">
{categories.map(category => <Category category={category}/>)}
   </div></>
  )
}

export default Search
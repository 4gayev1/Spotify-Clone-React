import { Icon } from "icons"

const Download = () => {
  return (
    <div className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white items-center px-6 gap-xp-4">
        <span><Icon name="download" size={20}/></span>
        Download App
    </div>
  )
}

export default Download
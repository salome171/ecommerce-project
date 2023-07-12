import { FaBars } from "react-icons/fa"

const AllNavbar = () => {
  const hanlechange = () => {
        
  }
    return(
        <div className="Alldropdown dropdownhover">
          <button onClick={hanlechange} className=" padallborder">
            <div><FaBars/></div>
            <div>ALL</div>
          </button>
        </div>
    )
}

export default AllNavbar
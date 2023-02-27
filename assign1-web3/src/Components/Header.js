function Header (props) {
    return(
        <span className="flex pb-5 bg-white bg-opacity-30 mb-5">
            <img src="./icons/clapperboard-solid.svg" className="object-scale-down max-h-16 pl-3"></img>
            <button>Home</button>
            <button>About</button>
        </span>
    )
}
export default Header

function Header (props) {

    const returnToHome = () => {
        props.setIsBrowse()
    }

    return(
        <span className="flex justify-between pb-5 bg-white bg-opacity-30 mb-5">
            <img src="./icons/clapperboard-solid.svg" className="object-scale-down max-h-16 pl-3"></img>
            <div>
                <button className="p-5 rounded text-white hover:bg-white hover:text-black mr-5" onClick={returnToHome}>Home</button>
                <button className="p-5 rounded text-white hover:bg-white hover:text-black">About</button>
            </div>
        </span>
    )
}
export default Header
export default function NavMobileButton(props) {
    return (
        <>
            <button className="relative -top-[16px] z-50" onClick={props.onClick}>
                <svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" id="menu" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"><path id="primary" d="M3,12H21M9,18H21M3,6H15" fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="2" ></path></svg>
            </button>
        </>
    )
}
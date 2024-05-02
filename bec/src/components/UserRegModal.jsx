
const UserRegModal = ({ open, onClose, children}) => {
    return (

        <div onClick={onClose} 
        className={`fixed inset-1 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/19" : "invisible"}`}
        >
        <div 
        onClick={(e) => {e.stopPropagation()}} 
        className={
            `bg-green-950 rounded-xl shadow p-7 transition-all
            ${open ? "scale-101 opacity-100" : "scale-125 opacity-0"}`}
            >
                {children}
            <div className="flex justify-end space-x-2">                
                <button 
                className="rounded text-white bg-blue-500 hover:bg-blue-600 py-1 px-3"
                type="button"
                >
                    Registrar
                </button>
                <button 
                onClick={ onClose }
                className="rounded text-white bg-red-500 hover:bg-red-600 py-1 px-3"
                type="button"
                >
                    Close
                </button>

            </div>
        </div>
    </div>
    )
}

export default UserRegModal;
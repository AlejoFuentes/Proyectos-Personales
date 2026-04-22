import './Header.css';

const Header = () => {
    return (
        <header className='header-fijo'>
            <div className="logo-container">
                <img src='/images/TiendaGamer.png' alt='TIENDA GAMER'></img>
            </div>
            <div className="buscador-container ms-4">
                <input 
                    className='input-tg ps-2'
                    placeholder='Buscá por productos, marcas o categorías'
                >
                </input>
                <button className='btn-accion buscador-header'>
                    <i className='bi bi-search'></i>
                </button>
            </div>
            <div className='botones-header d-flex justify-content-start gap-2'> 
                <button className='btn-accion d-flex align-items-center btn gap-2'>
                    <i className='bi bi-person'></i>Iniciar Sesión
                </button>
                <button className='btn-accion d-flex align-items-center btn'>
                    <i className='bi bi-cart3'></i>
                </button>
            </div>
        </header>
    )
}

export default Header;





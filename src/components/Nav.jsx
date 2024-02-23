import { Link } from "react-router-dom";

const Nav = () => {
	return (
    <header className='header'>
      <div className='container'>
        <nav className='header__navbar'>
          <ul>
            {/* 
						<li>
							<Link to="/">Shop</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
		*/}

			<li>
				<Link  to ="/"> Cart </Link>
			</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

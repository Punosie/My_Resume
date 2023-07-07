import { useGlitch } from 'react-powerglitch';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBomb} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function Glitch() {
    const glitch = useGlitch();

    return (
        <>
            <span ref={glitch.ref}>
              <FontAwesomeIcon className="py-5" icon={faBomb} style= {{color: "#ffffff", fontSize:"5rem"}} />
            </span>
            <h1 className='py-2'><span ref={glitch.ref}>404 PAGE not found</span></h1><br/>
            <span ref={glitch.ref}>
                <NavLink as={Link} to='/'><Button className='noHover my-2'>Back to Home</Button></NavLink>
            </span>
        </>

    );
}

export default Glitch;
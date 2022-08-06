import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './mainbtn.scss';

const MainBtn = ({title,ico}) => {

    return (
        <div className="more rounded-5 mt-4">
            <div className='overlay'></div>
                <p>{title}</p>
                <div className='icon'>
                <FontAwesomeIcon className='fs-4 d-block mx-auto mt-3' icon={ico}/>
            </div>
        </div>
    )
}
export default MainBtn;


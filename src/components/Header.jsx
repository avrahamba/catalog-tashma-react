import React,{useState, useEffect} from 'react'
import Find from '../components/Finder'
import { baseUrl } from '../services/config'
import ReplyArrow from '../img/ReplyArrow.svg'
const Header = (props) => {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash);
        })
    }, [])
    return (
        <div className="header">
            <div className="find-header">
              {/* {route.length>1?<a href={baseUrl}><img src={ReplyArrow} className="back-img" alt="" /></a>:''} */}
                <Find onClear={props.onClear} onFind={props.onFind} />
            </div>
        </div>
    )
}

export default Header

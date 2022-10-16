import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";

const FallbackImage = ({src, className="", ...rest}) => {
    const [error, setError] = useState(false)
    useEffect(() => {
        setError(false)
    }, [src])
    return (
        error || !src ? <div className={`is-flex is-align-items-center is-justify-content-center ${className}`}><FontAwesomeIcon size="4x" icon={faImage} /></div> : <img className={className} onError={() => setError(true)} src={src} {...rest}/>
    );
};

export {FallbackImage};
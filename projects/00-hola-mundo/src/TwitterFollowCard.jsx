import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({userName = 'unknown', children, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }


    // console.log(isFollowing)
    
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="El avatar de midudev" src= {`https://unavatar.io/${userName}`} />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUsername'>@{userName}</span>
            </div>
        </header>
        
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}

TwitterFollowCard.propTypes = {
    userName: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,

};
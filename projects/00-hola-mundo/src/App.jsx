
import '../src/App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName : 'DylanBenz2000',
        name : 'Michael Dylan Ramos Benítez',
        isFollowing: true
    },
    {
        userName : 'midudev',
        name : 'Miguel Angel Durán',
        isFollowing: true
    },
    {
        userName : 'PacoHdesz',
        name : 'Paco Hdez',
        isFollowing: false
    },
    {
        userName : 'TMChein',
        name : 'Tomas',
        isFollowing: false
    }
    
]

export function App() {
    return(
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    );
}

 
import { useEffect, useState } from "react"
import { Story } from "./Story"

export const Landing = () => {
    const [topStories, setTopStories] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await res.json()
            const top10 = data.slice(0, 10);
            setTopStories(top10)
        })()
    })
    return (
        <div>
            <h1>Top 10 Hacker News Stories</h1>
            <ul>
            {topStories.map(storyId => (
                <Story key={storyId} id={storyId} />
            ))}
            </ul>
        </div>
    )
}


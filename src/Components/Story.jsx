import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Story = ({ id }) => {
    const [story, setStory] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await res.json()
            setStory(data);
        })()

    }, [id]);

    return (
        <div>
        {story ? (
            <div onClick={() => { navigate(`/story/${id}`) }}>
                {story.title}
            </div>
        ) : (
            'Loading...'
        )}
        </div>
    );
}

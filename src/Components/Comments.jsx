import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Comments = () => {
    const { id } = useParams();
    const [story, setStory] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await res.json()
            setStory(data)
            
        })()

    }, [])
    return (
        <div>
            {story && (<div>
                        <h1>{story.title}</h1>
                        {story.kids.map(commentId => <Comment key={commentId} commentId={commentId} />)}
                        </div>)}
        </div>
    )
}

const Comment = ({ commentId }) => {
    const [comment, setComment] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await res.json()
            setComment(data)
        })()

    }, [])

    return(
        <div>
            {
                comment && (
                    <div>
                        <h5>{comment.text}</h5>
                        <div>
                            By {comment.by}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
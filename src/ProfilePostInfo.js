import React, { useState } from "react";
import Comment from "./Comment";
import like from "./icons/like.png"
import likeActive from "./icons/likeActive.png"
import comment from "./icons/comment.png"
import previousButton from "./icons/previous.png"
import nextButton from "./icons/next.png"

function ProfilePostInfo({ post, user, onLike, onComment, myUser, onCommentDelete, increaseIndex, decreaseIndex }) {
    const [isClicked, setIsClicked] = useState(false)
    const [commentInput, setCommentInput] = useState("")
    const [alreadyLiked, setAlreadyLiked] = useState((post.likes.includes(myUser.username) ? true : false))
    const { likes, image, comments, caption } = post
    const { username } = user

    const className = (isClicked ? "commentform" : "straightupnothin")

    const handleSubmit = (e) => {
        e.preventDefault();

        const comment = {
            id: Math.random(),
            posterId: user.id,
            commenterId: myUser.id,
            username: myUser.username,
            text: commentInput
        }

        onComment(user, post, comment)
        setCommentInput("")
    }

    function handleLike() {
        onLike(user, post)
        setAlreadyLiked(!alreadyLiked)
    }

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const commentsToDisplay = comments.map((comment) => {
        return <Comment key={comment.text} comment={comment} myUser={myUser} onCommentDelete={onCommentDelete} user={user} post={post} />
    })
    return (
        <div className="PostContainer" id={post.id} >
            <img className="previousButton" onClick={decreaseIndex} src={previousButton} />
            <div className="mainFeedPostImageContainer">
                <img src={image} alt="post" className="mainFeedPostImage" />
            </div>
            <img className="nextButton" onClick={increaseIndex} src={nextButton} />
            <div className="likeAndCommentButton">
                {(alreadyLiked ? <img className="islikedimg" src={likeActive} onClick={handleLike} /> : <img className="islikedimg" src={like} onClick={handleLike} />)}
                <img className="commentButton" src={comment} onClick={handleClick} />
            </div>
            <div className="likesCommentsCaptionAndCommentForm">
                <div>{likes.length} {likes.length === 1 ? "Like" : "Likes"}</div>
                <div className="captionContainer"><span className="captionUserName">{username}</span> <div className="captionText"> {caption}</div></div>
                <div className="commentsContainer">{commentsToDisplay}</div>
                <form className={className} onSubmit={handleSubmit}>
                    <div className="input">
                        <input placeholder={`Add a comment for ${user.username}`} value={commentInput} onChange={(e) => setCommentInput(e.target.value)}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfilePostInfo
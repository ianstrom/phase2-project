import React from "react";
import ProfilePostInfo from "./ProfilePostInfo";

function ProfilePostContainer({ post, user, onLike, onComment, myUser, decreaseIndex, increaseIndex, goBackToProfile, onCommentDelete }) {

    window.addEventListener(
        "keydown",
        (e) => {
            if (e.code == 'ArrowRight') {
                increaseIndex();
            } else if (e.code == 'ArrowLeft') {
                decreaseIndex();
            } else if (e.code == 'Escape') {
                goBackToProfile();
            } 
        }
    )

    return (
        <div >
            <button onClick={decreaseIndex}>Previous</button>
            <ProfilePostInfo post={post} user={user} onLike={onLike} onComment={onComment} myUser={myUser} onCommentDelete={onCommentDelete}/>
            <button onClick={increaseIndex}>Next</button>
        </div>
    )
}

export default ProfilePostContainer
function PostCard(props)
{
    return (
         <div className="post-card">
            <div>
                {props.tit}
            </div>
            <div>
                {props.bod}
            </div>
         </div>
    );
}
export default PostCard;
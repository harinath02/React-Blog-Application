import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://i0.wp.com/theboutiqueadventurer.com/wp-content/uploads/2022/11/river.jpg?fit=1050%2C750&ssl=1" alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet.
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur praesentium eaque! Quaerat ipsum reiciendis unde molestiae distinctio temporibus et exercitationem incidunt laboriosam? Corrupti, ab!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur praesentium eaque! Quaerat ipsum reiciendis unde molestiae distinctio temporibus et exercitationem incidunt laboriosam? Corrupti, ab!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur praesentium eaque! Quaerat ipsum reiciendis unde molestiae distinctio temporibus et exercitationem incidunt laboriosam? Corrupti, ab!

      
      
      </p>
    </div>
  )
}

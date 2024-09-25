import './mySinglePost.css';

export default function MySinglePost() {
  return (
    <div className='singlePost'>
       <div className="singlePostWrapper">
        <img 
        className='singlePostImg'
        src="https://e53g3my9om6.exactdn.com/wp-content/uploads/2023/12/van-meter-state-park.jpg" 
        alt="" 
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        </h1>
         <div className="singlePostInfo">
          <span className="singlePostAuthor">Author:<b>Safak</b></span>
          <span className="singlePostDate">1 hour ago</span>
         </div>
         <p className='singlePostDesc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et qui soluta neque doloremque repudiandae temporibus dolor? Aperiam sed temporibus dolorem enim ipsa voluptas quaerat reprehenderit. Architecto, autem! Vero, cum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et qui soluta neque doloremque repudiandae temporibus dolor? Aperiam sed temporibus dolorem enim ipsa voluptas quaerat reprehenderit. Architecto, autem! Vero, cum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et qui soluta neque doloremque repudiandae temporibus dolor? Aperiam sed temporibus dolorem enim ipsa voluptas quaerat reprehenderit. Architecto, autem! Vero, cum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et qui soluta neque doloremque repudiandae temporibus dolor? Aperiam sed temporibus dolorem enim ipsa voluptas quaerat reprehenderit. Architecto, autem! Vero, cum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et qui soluta neque doloremque repudiandae temporibus dolor? Aperiam sed temporibus dolorem enim ipsa voluptas quaerat reprehenderit. Architecto, autem! Vero, cum!
        </p>
       </div>
    </div>
  )
}

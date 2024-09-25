import './write.css';

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' 
        src="https://i.pinimg.com/originals/95/04/bb/9504bb8921f74d5563ec6a2be14ed58a.jpg" 
        alt="writeImg" 
        />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type='file' id='fileInput' style={{display:'none'}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='Tell your story......'
             type='text'
             className='writeInput writeText'
            />
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

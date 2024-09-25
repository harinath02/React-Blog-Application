import './contact.css';

export default function Contact() {
  return (
    <div className='contact'>
        <form className="contactForm">
            <span className="contactTitle">Contact Me</span>
            <label >Name</label>
            <input className='contactInput' type="text" placeholder='Enter your name' />
            <label >Contact No.</label>
            <input className='contactInput' type="number" placeholder='Enter your number' name="" id="" />
            <label >Email</label>
            <input className='contactInput' type="email" placeholder='Enter your email' name="" id="" />
            <label>Subject</label>
            <input className='contactInput' type="text" placeholder='Mention your query subject'/>
            <label>Message</label>
            <textarea className='contactInput' type='text' placeholder='write yout message here'/>
            <button className="contactSubmit">Send us</button>
        </form>
    </div>
  )
}

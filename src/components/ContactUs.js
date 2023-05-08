import '../contact.css';


  function ContactUs() {
  return (
    
   <div className="containerc">
        <div className="contacthead">
            <h2>Contact Us</h2>
            <p>If you have any query then leave us a message:</p>
        </div>
        <div className="rowc">
           
           
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name"/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name"/>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write your query"
                        className='contacttextarea'></textarea>
                    {/* <!-- <input type="submit" onclick=""> --> */}
                    <button type="submit">Submit</button>
                </form>
           
        </div>
    </div>
  );
}

export default ContactUs;

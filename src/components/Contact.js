import React from 'react'

const Contact = (props) => (
    <section id="contact">
        
        <div className="inner">
        <header className="major">
            <h2>Contact</h2>
             
                <section>
                    <form name ="contact" method="POST" data-netlify="true" >
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="6"></textarea>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="special" /></li>
                            <li><input type="reset" value="Clear" /></li>
                        </ul>
                    </form>
                
                </section>
                </header>
        </div>
        
    </section>
)

export default Contact

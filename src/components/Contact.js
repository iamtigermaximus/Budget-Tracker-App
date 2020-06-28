import React from 'react'

export const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="ptext-contact">
                    <h1>Contact Me</h1>
                    <p>Interested in Hiring Me?</p>
                    <form>
                        <input name="name" type="text" className="feedback-input" placeholder="Name" />
                        <input name="email" type="text" className="feedback-input" placeholder="Email" />
                        <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
                        <input type="submit" value="SUBMIT" />
                    </form>



                </div>
            </div>
        </div>
    )
}

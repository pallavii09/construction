import React from 'react';
import './style.css';

function Contact() {
    return(
        <div class="WelcomeForm row"> 
        <h2>Welcome to Clean Property Solution</h2>  <hr />     
        <div class="column Form-Content">
            <form action="" method="">
                <input type="text" text="name" placeholder="Name" />
                <input type="text" text="email" placeholder="Email Id" />
                <input type="number" text="Phone No." placeholder="Phone No." />
                <input type="submit" text="submit" placeholder="Submit" />
            </form>
        </div>

        </div>
    );

}
export default Contact;
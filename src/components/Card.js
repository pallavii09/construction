import React from 'react';
import './style.css';

function Card() {
    return(

        
        <div class="card-section">
        <div class="cardColor">
        <h2>What We Do</h2> <hr />

        <div class="flex-container">        

        <div class="flex-item" >   
        <div class="cardBox">
            <img src="/assets/img/patten_bg.png" alt="" />
            <div class="serviceContent">
            <h3 class="text">01</h3>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. </p>
            </div>
        </div>
        </div>

        <div class="flex-item" >   
        <div class="cardBox">
        <img src="/assets/img/patten_bg.png" alt="" />
            <div class="serviceContent">
            <h3 class="text">02</h3>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. </p>
            </div>
        </div>
        </div>

        <div class="flex-item" >   
        <div class="cardBox">
        <img src="/assets/img/patten_bg.png" alt="" />
            <div class="serviceContent">
            <h3 class="text">03</h3>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. </p>
            </div>
        </div>
        </div>

        <div class="flex-item" >   
        <div class="cardBox">
            <img src="/assets/img/patten_bg.png" alt="" />
            <div class="serviceContent">
            <h3 class="text">04
            
            </h3>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. </p>
            </div>
        </div>
        </div>


        </div>
        </div>
        </div>
    );

}
export default Card;
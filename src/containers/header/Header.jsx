import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptas earum sed tenetur ipsam quos doloribus eaque numquam, fuga fugiat, fugit reprehenderit voluptate vel sequi sunt, iusto in beatae tempore. Eius repudiandae reprehenderit sapiente qui? Voluptatem nemo necessitatibus ea velit cupiditate in eum quam! Temporibus necessitatibus optio consequatur quod dicta.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header
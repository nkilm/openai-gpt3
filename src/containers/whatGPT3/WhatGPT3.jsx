import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3?" text="Generative Pre-trained Transformer 3 is an autoregressive language model that uses deep learning to produce human-like text. It is the third-generation language prediction model in the GPT-n series created by OpenAI, a San Francisco-based artificial intelligence research laboratory." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Simulate human-like conversations using Natural Language Processing (NLP)." />
      <Feature title="Knowledgebase" text="GPT-3's deep learning neural network is a model with over 175 billion machine learning parameters. To put things into scale, the largest trained language model before GPT-3 was Microsoft's Turing NLG model, which had 10 billion parameters." />
      <Feature title="Education" text="Artificial Intelligence (AI) has the potential to address some of the biggest challenges in education today, innovate teaching and learning practices, and ultimately accelerate the progress." />
    </div>
  </div>
);

export default WhatGPT3;
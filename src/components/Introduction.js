import React from 'react';

const Introduction = () => (
  <section className="container" id="intro">
    <p className="intro__desc">
      This is a simple app to roughly simulate Azur Lane's gacha, using the rates displayed in the game of:
    </p>
    <div>
      <h3>Light Construction</h3>
      <ul>
        <li>Normal: 55%</li>
        <li>Rare: 26%</li>
        <li>Elite: 12%</li>
        <li>Champion: 7%</li>
      </ul>
    </div>
    <p>As the exact rates of each character are not known, this app assumes each character is given equal weight within each pool and is thus chosen randomly.</p>
    <p>Contents of each pool are provided by <a href="http://wiki.joyme.com/blhx/%E5%BB%BA%E9%80%A0%E6%A8%A1%E6%8B%9F%E5%99%A8">the Chinese community wiki.</a></p>
  </section>
)

export default Introduction;
import React from "react";

export default function About() {
  // document.addEventListener('mousemove', (e) => { trackMouseMove(e); });
  // const svgRef = useRef(null);
  // const trackMouseMove = (e) => {
  //   if (!svgRef || !svgRef.current) return;
  //   const walk = 25;
  //   const { offsetWidth: width, offsetHeight: height } = svgRef.current.svgWrapper;
  //   let { clientX: x, clientY: y } = e;

  //   const xWalk = Math.round((x / width * walk) - (walk / 2));
  //   const yWalk = Math.round((y / height * walk) - (walk / 2));
  //   svgRef.current.svgWrapper.children[0].style.filter = `drop-shadow(${xWalk}px ${yWalk}px 15px #FFF)`;
  // }

  return (
    <>
      <h1>Juliette Abeyta</h1>

      <div className="about-text">
        <div>
          <p>
            I'm a full-stack developer based in Los Angeles, California. I work on a multidisciplinary team of engineering at{" "}
            <a
              href="https://evgo.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="link-new-window"
            >
              <b>EVgo</b>
            </a>
          .
        </p>
          <p>
            In over two years of slinging code, I have gained proficiencies in
            various languages, specializing in JavaScript. I love writing
            scalable, modular applications, and learning & optimizing along the
            way.
          </p>
          <p>
            I am deeply passionate about expanding my knowledge in myriad
            disciplines. In addition to development, I have started a small{" "}
            blog in which I exercise broadening my
            knowledge on various topics. I also enjoy reading, cooking good vegan
            food, and taking long walks on the beach. And I am always looking to
            connect!
          </p>
        </div>
      </div>
      <span id="link-new-window" hidden>
        Opens in a new window
      </span>
    </>
  )
}

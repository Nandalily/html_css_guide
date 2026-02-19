import Image from "next/image";

export default function Home() {
  return (
  // div for the main container of the page 
     <div className="container">
<header>
   <b><h1 >MUSDAA WEBSITE</h1></b> 
   <i><h4 >We are his Hands </h4></i>
</header>
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#activities">Activities</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#projects">Our Projects</a></li>
        <li><a href="#calender">Our Calender</a></li>
        <li><a href="members.html">Members</a></li>
        
    </ul>
</nav>
<main> 
    <section id="home">
        <article>
               <h2 className="h2">Welcome to MUSDAA</h2>
            <h4 className="h2">Makerere Seventhday Adventist Assosciation</h4>
            <p>The Makerere University Seventh-day Adventist Association (MUSDAA) is a vibrant public
campus ministry serving students, staff, and the wider community of Makerere
University. MUSDAA exists to nurture spiritual growth, promote Christian fellowship, and
engage in mission and service. <strong>Founded in 1974</strong> by students<b>open to all <del>SDA</del> students on campus</b> xxx <em>emphasized</em> xxx <i>itallics</i>xxx <mark>highlight</mark>xxx <del>deleted</del>xxx <ins>insert</ins></p>
                  {/* Blockquote 
                    <blockquote cite="https://www.youtube.com/results?search_query=musdaa+home+coming">
                      <footer>— <cite>Home Comming</cite></footer>
                    </blockquote> */}
                     <hr />
        </article>
                
                 {/* ASIDE: Tangentially related content  */}
                <aside>
                    <h4>💡 Pro Tip</h4>
                    <p>Best place to be at Makerere, A  HOME AWAY FROM HOME</p>
                </aside>
    </section>
    <section id="activities">
           <table>
                        <caption className="h2"><h2>Up comming Activities</h2></caption>
                        <colgroup>
                            <col style="background-color: #f0f0f0;">
                            <col span="2">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Activity</th>
                                <th>Dates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>February</td>
                                <td>Youth Summit</td>
                                <td>----</td>
                            </tr>
                            <tr>
                                <td>March</td>
                                <td>Baptism</td>
                                <td>----</td>
                            </tr>
                            <tr>
                                <td>May</td>
                                <td>Holy Communion</td>
                                <td>----</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>May</th>
                                <th>End of semister</th>
                                <th>----</th>
                            </tr>
                        </tfoot>
         </table>
                </article>
    </section>;
    <section id="achievements">Achievements
         <article>
                    <h3 className="h2">MUSDAA ACHIEVEMENTS OVER THE YEARS</h3>
                    {/* Ordered and unordered lists  */}
                    
                    <h5>Achievements of the years</h5>
                    <ol>
                        <li>Kayunga</li>
                        <li>Skills</li>
                        <li>MUSDAA Land</li>
                    </ol>
                    
                     {/* Picture element for responsive images  */}
                    <h4>Picture Element (Responsive Images)</h4>
                    {/* <picture>
                        <source media="(min-width: 800px)" srcset="large-image.jpg">
                        <source media="(min-width: 400px)" srcset="medium-image.jpg">
                        <img src="small-image.jpg" alt="Responsive image example" style="width:100%; max-width:400px;">
                    </picture> 
                     */}
                     {/* Audio element  */}
                    <h4>Audio Player</h4>
                    <audio controls>
                        <source src="audio.mp3" type="audio/mpeg">
                        <source src="audio.ogg" type="audio/ogg">
                        Your browser does not support the audio element.
                    </audio>
                    
                    {/* Video element  */}
                    <h4>Video Player</h4>
                    {/* <video width="400" controls>
                        <source src="video.mp4" type="video/mp4">
                        <source src="video.webm" type="video/webm">
                        <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
                        Your browser does not support the video element.
                    </video>  */}
               
           </article>
    </section>
    <section id="projects">
        <h2 className="h2">Our projects</h2>
                
                <article>
                    <h3>Marternity Center</h3>
                    <p>
                       long term project located in Kayunga -Kitwe 
                    </p>
                    
                    <h4>View architectual Plan</h4>
                    <p>
                        Very long URL: https://www<wbr>.example<wbr>.com<wbr>/very<wbr>/long<wbr>/path<wbr>/to<wbr>/resource
                    </p>
                </article>
                
                <div className="grid">
                    <div className="card">
                        <h4>🎯 SAHK Phases</h4>
                        <p>Use semantic HTML elements to improve accessibility and SEO.</p>
                    </div>
                    <div className="card">
                        <h4> Fellowship Projects</h4>
                        < table>
                            <tr>
                                <td> <ol><th>Fellowship</th>
                      <td></td> <th>Projects</th>
                            </tr>
                        </table>
                        <ol><li>UH-Mitchellex: -----</li>
                        <li>Lumbox: ---</li>
                        <li>Afrostone: ----</li>
                        <li>Nkrucote: -----</li>
                        <li>Kikoni: -----</li>
                        <li>K.K: ------</li>
                    </ol>
                    </div>
                    <div className="card">
                        <h4>♿ Evangelistic Campaines</h4>
                        <p>Use proper labels and ARIA attributes when needed.</p>
                    </div>
                </div>
    </section>
    <section id="calender">
        <h2 className="h2">MUSDAA Calender</h2>
                      <div className="calendar">
  <div className="header">
    <button onClick="changeMonth(-1)">◀</button>
    <div className="month-year" id="monthYear"></div>
    <button onClick="changeMonth(1)">▶</button>
  </div>

  <div className="days" id="days"></div>

  <div className="legend" id="legend"></div>
</div>
                </article>
    </section>
   
</main>
<p>PAGE</p>

<footer>
           <h3>Contact Information</h3>
            <address>
                reach us on: <a href="mailto:info@example.com">Web Developer</a><br />
                Visit us at: Kampala-Uganda, Makerere University, Nkurumah Hall<br />
                Phone: +256 783 289521
            </address>
            
            <hr style="margin: 20px 0; border-color: #34495e;">
            
            <p>
                <small>
                    &copy; 2026 MUSDAA website. All rights reserved. <br />
                    Last updated: <time datetime="2026-02-12">February 12, 2026</time>
                </small>
            </p>
</footer>


     </div>
  );

import '../App.css';


  function About(props) {
  return (
    <>
        <div className="about-section">
        <h1>About Us</h1>
        <p>This website is best product site.</p>
        <p>We provide all computer and related peripherals with great options and good price.</p>
        </div>

        <h2 className="head2">Our Team</h2>
        <div className="row">
        <div className="column">
            <div className="card">
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className="container">
                <h2>Jack</h2>
                <p className="title">CEO & Founder</p>
                <p>More then 10 years Experience.</p>
                <p>jack@example.com</p>
                {/* <p><button className="button">Contact</button></p> */}
            </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
            {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
            <div className="container">
                <h2>Mike</h2>
                <p className="title">Art Director</p>
                <p>More then 7 years Experience.</p>
                <p>mike@example.com</p>
                {/* <p><button className="button">Contact</button></p> */}
            </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
            {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> */}
            <div className="container">
                <h2>John</h2>
                <p className="title">Designer</p>
                <p>More then 8 years Experience.</p>
                <p>john@example.com</p>
                {/* <p><button className="button">Contact</button></p> */}
            </div>
            </div>
        </div>
</div>

    </>
  );
}

export default About;

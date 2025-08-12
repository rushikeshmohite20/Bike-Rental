import React from 'react';
import Anuj from '../../assets/Anuj.jpeg';
import Pritam from '../../assets/Pritam.jpeg';
import Ram from '../../assets/Ram.jpeg';
import Rushi from '../../assets/Rushi.jpeg';
import Ajay from '../../assets/Ajay.jpeg';
import VideoBackground from '../../assets/video2.mp4'; // Add your video here

const ContactUs = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <video
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
        }}
        autoPlay
        muted
        loop
      >
        <source src={VideoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: 'relative',
          zIndex: '1',
          padding: '50px 0',
          minHeight: '100vh',
          color: '#fff', // Set text color to white for better visibility
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ color: 'white' }}>Contact Us</h1>
        </div>
        <div className="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '8px', padding: '30px' }}>
          <div className="row">
            {[
              {
                name: "Anuj Joshi",
                email: "joshianuj0505@gmail.com",
                linkedIn: "https://www.linkedin.com/in/anuj-joshi-223887236/",
                imgSrc: Anuj,
              },
              {
                name: "Pritam Hiras",
                email: "pritamhiras280802@gmail.com",
                linkedIn: "https://www.linkedin.com/in/pritam-hiras-a2a767126",
                imgSrc: Pritam,
              },
              {
                name: "Ram Gaigol",
                email: "ramgaigol9@gmail.com",
                linkedIn: "https://www.linkedin.com/in/ram-gaigol-5a771b236",
                imgSrc: Ram,
              },
              {
                name: "Rushi Mohite",
                email: "rushikeshsujaymohite20@gmail.com",
                linkedIn: "www.linkedin.com/in/rushikesh-mohite-a6b25b22b",
                imgSrc: Rushi,
              },
              {
                name: "Ajay Joshi",
                email: "ajay.j8721@gmail.com",
                linkedIn: "https://www.linkedin.com/in/ajayjadhav09",
                imgSrc: Ajay,
              }
            ].map((person, index) => (
              <div key={index} className="col-md-4" style={{ marginBottom: '30px' }}>
                <div className="card mb-4" style={{ backgroundColor: '#333', color: '#fff' }}>
                  <img className="card-img-top" src={person.imgSrc} alt={person.name} />
                  <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">Email: <a href={`mailto:${person.email}`} style={{ color: '#1E90FF' }}>{person.email}</a></p>
                    <p className="card-text">LinkedIn: <a href={person.linkedIn} target="_blank" rel="noopener noreferrer" style={{ color: '#1E90FF' }}>{person.name}</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-4" style={{ backgroundColor: '#333', color: '#fff' }}>
            <div className="card-header">Centre for Development of Advanced Computing, Acts Pune</div>
            <div className="card-body">
              <p>C-DAC, ACTS, 4th Floor, Innovation Park, Sr. No. 34/B/1, Panchvati, Pashan, Pune Maharashtra 411008</p>
              <p>Phone: +91-20-25503100<br />Fax: +91-20-25503131</p>
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.129502509959!2d73.79639101427602!3d18.56725928738202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be4df393631d%3A0x19e6797be8a03b81!2sC-DAC%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1720787740926!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 'none' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

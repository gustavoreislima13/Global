"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import validada from '@/image/validado.png';
import img1 from '@/image/imagem 1.jpg';
import img2 from '@/image/imagem 2.jpg';
import img3 from '@/image/imagem 3.jpg';
import perfil from '@/image/gustavo.png'; // Imagem do perfil
import githubIcon from '@/image/git.png'; // Ícone do GitHub
import linkedinIcon from '@/image/link.png'; // Ícone do LinkedIn

const DigitalProductDesignAgency: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      padding: '50px 10%',
      backgroundColor: '#000'
    }}>
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80vh'
      }}>
        <div style={{ maxWidth: '500px', marginRight: '40%' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.2', color: '#fff' }}>
            Digital <span style={{ color: '#ff66b2' }}>product</span> design agency
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#fff', margin: '30px 0' }}>
            Create live segments and target the right people for messages based on their behaviors.
          </p>
          <button style={{ padding: '20px 40px', fontSize: '1.25rem', fontWeight: 'bold', backgroundColor: '#ff66b2', color: '#fff', border: '2px solid #ff66b2', borderRadius: '30px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255, 102, 178, 0.4)', transition: 'transform 0.3s', marginTop: '20px' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            Get Started
          </button>
        </div>
        <div>
          <Image
            src={img1}
            alt="People collaborating on a design project"
            style={{ maxWidth: '500px', borderRadius: '20px' }}
          />
        </div>
      </section>

      <section style={{
        backgroundColor: '#000',
        padding: '100px 10%'
      }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>
          Our included <span style={{ color: '#ff66b2' }}>service</span>.
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '50px' }}>
          Aliquam tristique libero at dui sodales, et placerat orci lobortis. Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px'
        }}>
          <div style={{
            padding: '40px',
            backgroundColor: '#000',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image src={validada} alt="Mobile Apps" width={80} height={80} style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>Mobile Apps</h3>
            <p style={{ color: '#fff' }}>We design professional looking yet simple Logo.</p>
          </div>
          <div style={{
            padding: '40px',
            backgroundColor: '#000',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image src={validada} alt="Branding Strategy" width={80} height={80} style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>Branding Strategy</h3>
            <p style={{ color: '#fff' }}>We design professional looking yet simple Logo.</p>
          </div>
          <div style={{
            padding: '40px',
            backgroundColor: '#000',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image src={validada} alt="Graphics Design" width={80} height={80} style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>Graphics Design</h3>
            <p style={{ color: '#fff' }}>We design professional looking yet simple Logo.</p>
          </div>
          <div style={{
            padding: '40px',
            backgroundColor: '#000',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image src={validada} alt="Online Marketing" width={80} height={80} style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>Online Marketing</h3>
            <p style={{ color: '#fff' }}>We design professional looking yet simple Logo.</p>
          </div>
        </div>
      </section>

      <section style={{
        padding: '100px 10%',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }}>
          <div>
            <Image src={img3} alt="Cover Your Everyday Expenses" style={{ maxWidth: '200px' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>Cover Your Everyday Expenses</h3>
            <p style={{ fontSize: '1.25rem', color: '#fff' }}>
              Inspiration comes in many ways and you like to save everything from, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          flexDirection: 'row-reverse'
        }}>
          <div>
            <Image src={img2} alt="We Offer Low Fees That Are Transparent" style={{ maxWidth: '200px' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>We Offer Low Fees That Are Transparent</h3>
            <p style={{ fontSize: '1.25rem', color: '#fff' }}>
              Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.
            </p>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '50px 0' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFFFFF' }}>Integrantes</h2>
        <p style={{ fontSize: '1.25rem', color: '#000' }}>Na Porto Seguro, acreditamos nas pessoas que fazem acontecer!</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          marginTop: '30px'
        }}>
          {[1, 2, 3].map((_, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <Image src={perfil} alt="Gustavo Lima" width={150} height={150} style={{ borderRadius: '50%', margin: '0 auto', display: 'block' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginTop: '10px' }}>Gustavo Lima</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image src={githubIcon} alt="GitHub" width={30} height={30} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image src={linkedinIcon} alt="LinkedIn" width={30} height={30} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '1.25rem', color: '#000', marginTop: '30px' }}>Na Porto Seguro, acreditamos nas pessoas que fazem acontecer!</p>
      </section>
    </div>
  );
};

export default DigitalProductDesignAgency;

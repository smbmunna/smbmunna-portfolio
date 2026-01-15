import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


//export const ContactUs = () => {


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('service_8z2fi7m', 'template_xczwbz6', form.current, 'tMb2U4XqyPnnM1EZ2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div  data-aos="flip-up" data-aos-duration="1000" className="mx-auto mb-12 mt-20 md:flex gap-20  bg-[#49108B] px-8 py-16 rounded-3xl max-w-7xl">
            <h2 className='text-center md:text-left mb-8 md:mt-0 font-bold text-3xl md:text-5xl text-white'>Lets Work Together</h2>
            <div className='mx-auto'>
                <form ref={form} onSubmit={sendEmail} className='space-y-4'>                    
                    <input placeholder='Your Name' className='py-12 input text-2xl md:text-5xl font-bold' type="text" name="user_name" />
                    <br />
                    <input placeholder='Email' className='input hidden'  type="email" name="user_email" value="smbmunna@gmail.com" />
                    <br />
                    <textarea placeholder='Your Message' className="textarea text-2xl md:text-5xl font-bold" name="message" />
                    <br />
                    <input className="btn btn-outline pb-8 pt-1 px-8 rounded-full text-2xl text-white font-bold h-2 w-full border-4" type="submit" value="Send"  />
                    <br />
                </form>
            </div>

        </div>
    );
};

export default ContactMe;
import React from 'react';
import contact from '../../img/1997f3da28e8d29289097871f45b04fd.gif';
const Contact = () => {
    return (
        <div className=' w-full  my-24'>
            <h1 className='text-4xl font-bold my-5 text-center'>Contact Me</h1>
            <div className='md:grid grid-cols-2 md:px-3  justify-center items-center'>
                <div className='md:block hidden'>
                    <img src={contact} className="" alt="" />
                </div>
                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" className='shadow-2xl rounded-md px-8 py-12 flex  flex-col mt-12' action="https://formspree.io/f/xrgdnroz" method="post">

                    <label className='mt-5 mb-2 text-xl font-medium' for="full-name">Full Name</label>
                    <input className="input border-2 border-gray-400 p-2 rounded-md bg-slate-100 w-full  " value="" type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                    <label className='mt-5 mb-2 text-xl font-medium' for="email-address">Email Address</label>
                    <input className="input border-2 border-gray-400 p-2 rounded-md bg-slate-100 w-full   " type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                    <label className='mt-5 mb-2 text-xl font-medium' for="message">Message</label>
                    <textarea className="textarea border-2 border-gray-400 p-2 rounded-md bg-slate-100 w-full textarea-bordered " name="message" id="message" placeholder="Your Text" required=""></textarea>

                    <div >
                        <input className=' hover:bg-indigo-400  px-3 md:px-10 py-3 rounded-2xl m-3 bg-indigo-600 border-none text-white text-lg' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
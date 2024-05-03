import React from 'react'

function ContactUs() {
    return (
        <>
            <div className="container mx-auto    mt-10">
               <div className='bg-coverImage bg-cover bg-no repeat'>

               </div>
                <div className='min-w-96 w-fit  bg-white rounded-md mx-auto'>

                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-custom-blue  sm:text-2xl font-custom-heading">Contact Us</h2>
                        <p className="mt-2 text-sm leading-8 py-3 text-custom-blue font-custom-sub-heading-para">"Need assistance or have a question? Contact us! Our dedicated team is here to help. Reach out via phone, email, or through our online form, and we'll get back to you promptly. Your satisfaction is our priority."</p>
                    </div>
                    < form action="#" method="POST" class="mx-auto mt-10 max-w-xl  sm:mt-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block  font-semibold leading-6 text-sm text-custom-gray font-custom-sub-heading-para">First name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlhtmlFor="last-name" className="block font-semibold leading-6 text-sm text-custom-gray font-custom-sub-heading-para">Last name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block  font-semibold leading-6 text-sm text-custom-gray font-custom-sub-heading-para">Email</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block font-semibold leading-6 text-sm text-custom-gray font-custom-sub-heading-para">Phone number</label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only font-custom-sub-heading-para">Country</label>
                                        <select id="country" name="country" className="h-full rounded-md border-2  bg-none py-0 pl-4 pr-9 text-sm text-custom-gray focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm">
                                            <option >+91</option>
                                            <option>+01</option>
                                        </select>

                                    </div>
                                    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" className="block w-full rounded-md border-2 px-3.5 py-2 pl-20 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:tetext-xl text-custom-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block  font-semibold leading-6 text-sm text-custom-gray font-custom-sub-heading-para">Message</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-2 px-3.5 py-2 text-sm text-custom-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                            <div className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">

                                    <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                        <span className="sr-only font-custom-sub-heading-para text-sm text-custom-gray">Agree to policies</span>

                                        <span aria-hidden="true" className="translate-x-0 h-4 w-4 transhtmlForm rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                    </button>
                                </div>
                                <label classNameName=" leading-6 text-gray-600" id="switch-1-label font-custom-sub-heading-para text-sm text-custom-gray">
                                    By selecting this, you agree to our&nbsp;
                                    <a href="#" className="font-semibold text-custom-blue font-custom-sub-heading-para text-sm">privacy&nbsp; policy</a>.
                                </label>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="block w-full rounded-md bg-custom-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-custom-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue font-custom-sub-heading-para  ">Let's talk</button>
                        </div>
                    </form>
                </div>
            </div>
        </>


    )
}

export default ContactUs
"use client";

import MainLayout from "@/components/layout/main";
import { Pane } from "evergreen-ui";

const ContactScreen = () => {
  return (
    <MainLayout>
      <Pane className="md:mt-28 md:mb-48">
        <Pane className="md:w-[60%] md:mx-auto">
          <Pane className="md:text-center md:mb-20">
            <h3 className="font-semibold md:text-3xl md:mb-5">Contact our Sales team to get started</h3>
            <p className="opacity-[0.5] md:text-base ">For further enquiries, Please contact us.</p>
          </Pane>
          <form>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="name" className="font-medium md:text-sm">Name & Surname</label> <br/>
                <input type="text" className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2" placeholder="Enter your name" name="" id="name" />
              </Pane>
              <Pane className="basis-1/2">
                <label htmlFor="business-name" className="font-medium md:text-sm">Business Name</label> <br/>
                <input type="text" className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2" placeholder="Enter your business name" name="" id="business-name" />
              </Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="email" className="font-medium md:text-sm">Email</label> <br/>
                <input type="text" className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2" placeholder="Enter your email" name="" id="email" />
              </Pane>
              <Pane className="basis-1/2">
                <label htmlFor="designation" className="font-medium md:text-sm">Designation</label> <br/>
                <select className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2 text-[#00000025]" name="designation" id="designation">
                  <option selected>Select a Designation</option>
                </select>
              </Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="phone" className="font-medium md:text-sm">Phone Number</label> <br/>
                <input type="text" className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2" placeholder="Enter your phone number" name="" id="phone" />
              </Pane>
              <Pane className="basis-1/2">
                <label htmlFor="website" className="font-medium md:text-sm">Website</label> <br/>
                <input type="text" className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2" placeholder="Enter your company website" name="" id="website" />
              </Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="transaction-volume" className="font-medium md:text-sm">Estimated Monthly Transaction Volume</label> <br/>
                <select type="text" className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2 text-[#00000025]" name="" id="transaction-volume">
                  <option selected>Select a range</option>
                </select>
              </Pane>
              <Pane className="basis-1/2">
                <label htmlFor="country" className="font-medium md:text-sm">Country</label> <br/>
                <select type="text" className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2 text-[#00000025]" name="" id="transaction-volume">
                  <option selected>Select a country</option>
                </select>
              </Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="product-interest" className="font-medium md:text-sm">Product of Interest</label> <br/>
                <select type="text" className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2 text-[#00000025]" name="" id="product-interest">
                  <option selected>Select a product</option>
                </select>
              </Pane>
              <Pane className="basis-1/2"></Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-12 w-full">
              <Pane className="w-full">
                <label htmlFor="business-needs" className="font-medium md:text-sm">Please tell us more about your business needs</label> <br/>
                <textarea type="text" className="box-border rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[0.25] border border-[#00000025] w-full mt-2 text-[#000000] md:h-[168px]" name="" id="business-needs">
                </textarea>
              </Pane>
            </Pane>
            <Pane className="flex gap-2 items-center justify-center">
              <input type="checkbox" value="check" />
              <label className="text-xs">I consent to the collection and processing of my  personal data in line with data regulation as described in the Graph’s Privacy Policy.</label>
            </Pane>
            <Pane className="flex justify-center mt-6">
              <button type="submit" className="md:w-[400px] bg-[#2276FF] py-4 px-6 text-white md:text-sm font-medium rounded-xl">Send Message</button>
            </Pane>
          </form>
        </Pane>
      </Pane>
    </MainLayout>
  )
};

export default ContactScreen;
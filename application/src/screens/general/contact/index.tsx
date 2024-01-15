"use client";

import MainLayout from "@/components/layout/main";
import { Button, Pane, SelectField, Spinner, TextInputField, toaster } from "evergreen-ui";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { COUNTRY_LIST, DESIGNATION_OPTIONS, PRODUCTS_OF_INTEREST_OPTIONS, TRANSACTION_VOLUME_OPTIONS, ValidationMessages } from "@/utils/constants";
import { useState } from "react";
import { AirtableAPI } from "@/service/airtable/api";

const ContactScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = yup.object().shape({
    name: yup.string().required(ValidationMessages.required),
    business_name: yup.string().required(ValidationMessages.required),
    email: yup.string().email(ValidationMessages.email).required(ValidationMessages.required),
    designation: yup.string().required(ValidationMessages.required),
    phone: yup.string().required(ValidationMessages.required),
    website: yup.string().required(ValidationMessages.required),
    transaction_volume: yup.string().required(ValidationMessages.required),
    country: yup.string().required(ValidationMessages.required),
    product_interest: yup.string().required(ValidationMessages.required),
    business_needs: yup.string().required(ValidationMessages.required),
    consent: yup.bool().oneOf([true], ValidationMessages.checkbox).required(ValidationMessages.checkbox),
  });

  const handleSendContactUs = async (values: any) => {
    setIsLoading(true);
    console.log('VALUES =>', values)
    try {
      const payload = {
        records: [
          {
            fields: {
              fldU0LubAC4Nmjnm6: values.name,
              fldZLXjWgJTWOxWZP: values.business_name,
              fldtXB1MlU0Ku8WkY: values.email,
              fldUXUBscRXBApVlo: values.designation,
              fld3Fg3uvDyTjugdr: values.phone,
              fldfyFHttgNlnCiKz: values.website,
              fldcMS8kv0LXjfgcN: values.transaction_volume,
              fldzXK6vgzYk2jXyx: values.country,
              fldJkEp7ylnshgDWx: values.product_interest,
              fldqHmp1G4p6jHTdy: values.business_needs,
              fldzP5Wrak1rIiLHj: values.consent,
            }
          }
        ]
      }
      const response = await AirtableAPI.createContactRecord(payload)
      console.log('RESPONSE [CONTACT PAGE] =>', response)
      toaster.success('Message sent!');
      resetForm();
    } catch (e) {
      toaster.danger('Message failed to send, kindly try again');
    } finally {
      setIsLoading(false);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    validationSchema: validationSchema,
    enableReinitialize: true,
    initialValues: {
      name: '',
      business_name: '',
      email: '',
      designation: '',
      phone: '',
      website: '',
      transaction_volume: '',
      country: '',
      product_interest: '',
      business_needs: '',
      consent: "",
    },
    onSubmit: handleSendContactUs,
  });


  return (
    <MainLayout>
      <Pane className="md:mt-28 md:mb-48 text-[#000]">
        <Pane className="md:w-[60%] md:mx-auto">
          <Pane className="md:text-center md:mb-20">
            <h3 className="font-semibold md:text-3xl md:mb-5">Contact our Sales team to get started</h3>
            <p className="opacity-[0.5] md:text-base ">For further enquiries, Please contact us.</p>
          </Pane>
          <Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="name" className="font-medium md:text-sm">Name & Surname</label> <br/>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  placeholder="Enter your name"
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.name}</div>
                )}
              </Pane>
              <Pane className="basis-1/2">
                <label htmlFor="business_name" className="font-medium md:text-sm">Business Name</label> <br/>
                <input
                  id="business_name"
                  name="business_name"
                  type="text"
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  placeholder="Enter your business name"
                  onChange={handleChange('business_name')}
                  onBlur={handleBlur('business_name')}
                  value={values.business_name}
                />
                {touched.business_name && errors.business_name && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.business_name}</div>
                )}
              </Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="email" className="font-medium md:text-sm">Email</label> <br />
                <input
                  name="email"
                  id="email"
                  type="text"
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  placeholder="Enter your email"
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.email}</div>
                )}  
              </Pane>
              <Pane className="basis-1/2">
                <label htmlFor="designation" className="font-medium md:text-sm">Designation</label> <br />
                <select
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  name="designation"
                  id="designation"
                  onChange={handleChange('designation')}
                  onBlur={handleBlur('designation')}
                  value={values.designation}
                >
                  <option value="" disabled selected style={{ color: 'red' }}>Select a Designation</option>
                  {DESIGNATION_OPTIONS.map((i: string) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                {touched.designation && errors.designation && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.designation}</div>
                )}  
              </Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="phone" className="font-medium md:text-sm">Phone Number</label> <br />
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  placeholder="Enter your phone number"
                  onChange={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                {touched.phone && errors.phone && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.phone}</div>
                )}  
              </Pane>
              <Pane className="basis-1/2">
                <label htmlFor="website" className="font-medium md:text-sm">Website</label> <br />
                <input
                  name="website"
                  id="website"
                  type="text"
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  placeholder="Enter your company website"
                  onChange={handleChange('website')}
                  onBlur={handleBlur('website')}
                  value={values.website}
                />
                {touched.website && errors.website && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.website}</div>
                )}
              </Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="transaction_volume" className="font-medium md:text-sm">Estimated Monthly Transaction Volume</label> <br />
                <select
                  name="transaction_volume"
                  id="transaction_volume"
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  onChange={handleChange('transaction_volume')}
                  onBlur={handleBlur('transaction_volume')}
                  value={values.transaction_volume}
                >
                  <option value="" selected disabled>Select a range</option>
                  {TRANSACTION_VOLUME_OPTIONS.map((i: string) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                {touched.transaction_volume && errors.transaction_volume && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.transaction_volume}</div>
                )}
              </Pane>
              <Pane className="basis-1/2">
                <label htmlFor="country" className="font-medium md:text-sm">Country</label> <br />
                <select
                  name="country"
                  id="country"
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  onChange={handleChange('country')}
                  onBlur={handleBlur('country')}
                  value={values.country}
                >
                  <option value="" disabled selected>Select a country</option>
                  {COUNTRY_LIST.map((i: any) => (
                    <option key={i.value} value={i.label}>
                      {i.label}
                    </option>
                  ))}
                </select>
                {touched.country && errors.country && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.country}</div>
                )}
              </Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-6">
              <Pane className="basis-1/2">
                <label htmlFor="product_interest" className="font-medium md:text-sm">Product of Interest</label> <br />
                <select
                  className="rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2"
                  name=""
                  id="product_interest"
                  onChange={handleChange('product_interest')}
                  onBlur={handleBlur('product_interest')}
                  value={values.product_interest}
                >
                  <option value="" disabled selected>Select a product</option>
                  {PRODUCTS_OF_INTEREST_OPTIONS.map((i: string) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                {touched.product_interest && errors.product_interest && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.product_interest}</div>
                )}
              </Pane>
              <Pane className="basis-1/2"></Pane>
            </Pane>
            <Pane className="flex items-start gap-5 mb-12 w-full">
              <Pane className="w-full">
                <label htmlFor="business_needs" className="font-medium md:text-sm">Please tell us more about your business needs</label> <br/>
                <textarea
                  name="business_needs"
                  id="business_needs"
                  className="box-border rounded-md md:p-4 md:pr-6 md:text-sm placeholder:opacity-[1] border border-[#00000025] w-full mt-2 text-[#000000] md:h-[168px]"
                  onChange={handleChange('business_needs')}
                  onBlur={handleBlur('business_needs')}
                  value={values.business_needs}
                ></textarea>
                {touched.business_needs && errors.business_needs && (
                  <div className="text-xs mt-1 tracking-wider text-red-500">{errors.business_needs}</div>
                )}
              </Pane>
            </Pane>
            <Pane className="flex gap-2 items-center justify-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                onChange={handleChange('consent')}
                onBlur={handleBlur('consent')}
                value={values.consent}
              />
              <label className="text-xs">I consent to the collection and processing of my  personal data in line with data regulation as described in the Graph’s Privacy Policy.</label>
            </Pane>
            {touched.consent && errors.consent && (
              <div className="text-xs mt-1 tracking-wider text-center text-red-500">{errors.consent}</div>
            )}
            <Pane className="flex justify-center mt-6">
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="md:w-[400px] flex items-center justify-center gap-4 bg-[#2276FF] py-4 px-6 text-white md:text-sm font-medium rounded-xl"
              >
                {isLoading && <Spinner size={25} />}
                <span>Send Message</span>
              </button>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </MainLayout>
  )
};

export default ContactScreen;
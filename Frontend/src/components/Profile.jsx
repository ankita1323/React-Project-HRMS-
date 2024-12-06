

// import React from 'react';

// function Profile() {
//   return (
//     <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-semibold text-center mb-6">Profile Details</h2>
      
//       <form className="space-y-6">
//         {/* Personal Details Section */}
//         <div className="collapse collapse-arrow bg-base-200 rounded-lg pb-10">
//           <input type="radio" name="my-accordion-2" defaultChecked />
//           <div className="collapse-title text-xl font-medium px-4 py-4 bg-gray-100">
//             Personal Details
//            </div>
//           <div className="collapse-content px-4 py-6 ">
          
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Profile"
//             className="w-auto h-60 rounded-full"
//           />
      
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_id" className="text-sm font-semibold text-gray-700">Employee ID</label>
//                 <input type="text" id="emp_id" name="emp_id" className="input input-bordered    w-full max-w-xs" required />
//               </div>
              
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_first_name" className="text-sm font-semibold text-gray-700">First Name</label>
//                 <input type="text" id="emp_first_name" name="emp_first_name" className="input input-bordered    w-full" required />
//               </div>
              
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_middle_name" className="text-sm font-semibold text-gray-700">Middle Name</label>
//                 <input type="text" id="emp_middle_name" name="emp_middle_name" className="input input-bordered    w-full" />
//               </div>
              
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_last_name" className="text-sm font-semibold text-gray-700">Last Name</label>
//                 <input type="text" id="emp_last_name" name="emp_last_name" className="input input-bordered    w-full" required />
//               </div>
              
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_email_id" className="text-sm font-semibold text-gray-700">Email ID</label>
//                 <input type="email" id="emp_email_id" name="emp_email_id" className="input input-bordered    w-full" required />
//               </div>
              
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_mobile_prime" className="text-sm font-semibold text-gray-700">Primary Mobile</label>
//                 <input type="tel" id="emp_mobile_prime" name="emp_mobile_prime" className="input input-bordered    w-full" required />
//               </div>
             
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_mobile_second" className="text-sm font-semibold text-gray-700">Secondary Mobile</label>
//                 <input type="tel" id="emp_mobile_second" name="emp_mobile_second" className="input input-bordered    w-full" required />
//               </div>
//               <div className="flex flex-col space-y-2" >
//                   <label htmlFor="emp_dob"  className="text-sm font-semibold text-gray-700">Date of Birth</label>
//                    <input type="date" id="emp_dob" name="emp_dob"  className="input input-bordered " required />
//               </div>
//               </div>
//               <div className=" font-semibold text-gray-700 py-10">
//               <h2 className='current_add_detail'>Current Address Details</h2>
//               </div>
//               <div className="flex flex-col space-y-2 pb-5">
//               <label htmlFor="emp_current_address" className="text-sm font-semibold text-gray-700">Current Address</label>
//               <textarea type="text" id="emp_current_address" name="emp_current_address"   className="input input-bordered "required />
//             </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
            
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_current_city" className="text-sm font-semibold text-gray-700">Current City</label>
//               <select  id="emp_current_city" name="emp_current_city"  className="input input-bordered " required>
//                 <option value=" ">Select City</option>
//               </select> 
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_current_state" className="text-sm font-semibold text-gray-700">Current State</label>
//               <select id="emp_current_state" name="emp_current_state"   className="input input-bordered "required >
//                 <option value=" "> select State</option>
//               </select>
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_current_pincode" className="text-sm font-semibold text-gray-700">Current Pincode</label>
//               <input type="text" id="emp_current_pincode" name="emp_current_pincode"   className="input input-bordered "required  />
//             </div>
//             </div>
//             <div className=" font-semibold text-gray-700 py-10">
//               <h2 className='current_add_detail'>Permenent Address Details</h2>
//               </div>

              
                
//             <div className="flex flex-col space-y-2 pb-5">
//               <label htmlFor="emp_permanent_address" className="text-sm font-semibold text-gray-700">Permement Address</label>
//               <textarea type="text" id="emp_permanent_address" name="emp_permanent_address"   className="input input-bordered "required />
//             </div>  
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 

//             <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_permanent_city" className="text-sm font-semibold text-gray-700">Current City</label>
//               <select  id="emp_permanent_city" name="emp_permanent_city"  className="input input-bordered " required>
//                 <option value=" ">Select City</option>
//               </select> 
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_permanent_state" className="text-sm font-semibold text-gray-700">Current State</label>
//               <select id="emp_permanent_state" name="emp_permanent_state"   className="input input-bordered "required >
//                 <option value=" "> select State</option>
//               </select>
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_permanent_pincode" className="text-sm font-semibold text-gray-700">Current Pincode</label>
//               <input type="text" id="emp_permanent_pincode" name="emp_permanent_pincode"   className="input input-bordered "required  />
//             </div>
            

           
//             <div className="flex flex-col space-y-2 ">
//               <label htmlFor="image" className="text-sm font-semibold text-gray-700">Profile Image</label>
//               <input type="file" id="image" name="image" accept="image/*" className="input input-bordered " />
//             </div>
//             </div>
            
            
//           </div>
//         </div>

//         {/* Education Details Section */}
//         <div className="collapse collapse-arrow bg-base-200 rounded-lg">
//           <input type="radio" name="my-accordion-2" />
//           <div className="collapse-title text-xl font-medium px-4 py-5 bg-gray-100">Education Details</div>
//           <div className="collapse-content px-4 py-6">
//           <div className="text-xl font-serif px-1 py-5 text-left text-black">Graduation Details</div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_grd_collage_name" className="text-sm font-semibold text-gray-700">Institute Name</label>
//                 <input type="text" id="emp_grd_collage_name" name="emp_grd_collage_name" className="input input-bordered    w-full max-w-xs " required />
//               </div>
//               <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_grd_collage_degree" className="text-sm font-semibold text-gray-700"> Degree</label>
//                <input type="text" id="emp_grd_collage_degree" name="emp_grd_collage_degree" className="input input-bordered    w-full max-w-xs"  required />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_grd_collage_branch_name" className="text-sm font-semibold text-gray-700"> Branch Name</label>
//                 <input type="text" id="emp_grd_collage_branch_name" name="emp_grd_collage_branch_name" className="input input-bordered    w-full max-w-xs" required />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_grd_collage_duration_start" className="text-sm font-semibold text-gray-700" > Start Date</label>
//                 <input type="date" id="emp_grd_collage_duration_start" name="emp_grd_collage_duration_start" className="input input-bordered    w-full max-w-xs" required />

//               </div> 
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_grd_collage_duration_end" className="text-sm font-semibold text-gray-70" > End Date</label>
//                 <input type="date" id="emp_grd_collage_duration_end" name="emp_grd_collage_duration_end" className="input input-bordered    w-full max-w-xs" required />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_grd_collage_marks"className="text-sm font-semibold text-gray-70"> Marks</label>
//                 <input type="text" id="emp_grd_collage_marks" name="emp_grd_collage_marks" className="input input-bordered    w-full max-w-xs" required />
//               </div>
//               <span><input type="file" accept="pdf/*"/>   <span className='flex'>upload all Marksheet and degree certificate (one pdf)</span></span>
            
//               </div>


//               <div className="divider pt-10 "></div>
             
//               {/*Collage details*/ }
//               <div className="text-xl font-serif px-1 pt-10 pb-5 text-left text-black">12th / Diploma Details</div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_collage_name" className="text-sm font-semibold text-gray-70">College Name</label>
//                 <input type="text" id="emp_collage_name" name="emp_collage_name" className="input input-bordered    w-full max-w-xs" required/>
//               </div>
//               <div className="flex flex-col space-y-2">        
//                 <label htmlFor="emp_collage_degree"className="text-sm font-semibold text-gray-70"> Degree</label>
//                 <input type="text" id="emp_collage_degree" name="emp_collage_degree" className="input input-bordered    w-full max-w-xs" required />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_collage_branch_name" className="text-sm font-semibold text-gray-70"> Branch Name</label>
//                 <input type="text" id="emp_collage_branch_name" name="emp_collage_branch_name" className="input input-bordered    w-full max-w-xs" required />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_collage_marks" className="text-sm font-semibold text-gray-70"> Marks</label>
//                 <input type="text" id="emp_collage_marks" name="emp_collage_marks"  className="input input-bordered    w-full max-w-xs" required/>
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_collage_duration_start" className="text-sm font-semibold text-gray-70"> Start Date</label>
//                 <input type="date" id="emp_collage_duration_start" name="emp_collage_duration_start" className="input input-bordered    w-full max-w-xs"required />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="emp_collage_duration_end" className="text-sm font-semibold text-gray-70"> End Date</label>
//                 <input type="date" id="emp_collage_duration_end" name="emp_collage_duration_end"  className="input input-bordered    w-full max-w-xs" required/>
//               </div>
//               <span><input type="file" accept="pdf/*"/> <span className='flex'>upload all Marksheet and board certificate (one pdf)</span></span>
//               </div>
//               <div className="divider pt-10 "></div>
//               {/* School Details**/}
//               <div className=' pb-10'>
//               <div className="text-xl font-serif px-1 pt-10 pb-5  text-left text-black"> 10th Details</div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
//               <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_school_name" className="text-sm font-semibold text-gray-70">School Name</label>
//               <input type="text" id="emp_school_name" name="emp_school_name" className="input input-bordered    w-full max-w-xs"required />
//               </div>
//               <div className="flex flex-col space-y-2" >
//               <label htmlFor="emp_school_marks" className="text-sm font-semibold text-gray-70">School Marks</label>
//               <input type="text" id="emp_school_marks" name="emp_school_marks"className="input input-bordered    w-full max-w-xs" required />
//               </div>
//               <span><input type="file" accept="pdf/*"/> <span className='flex'>upload all Marksheet and board certificate (one pdf)</span></span>
//               </div>
         
//             </div>
//           </div>
//         </div>

//         {/* Other Details Section */}
//         <div className="collapse collapse-arrow bg-base-200 rounded-lg">
//           <input type="radio" name="my-accordion-2" />
//           <div className="collapse-title text-xl font-medium px-4 py-2 bg-gray-100">Other Details</div>
//           <div className="collapse-content px-4 py-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="flex flex-col space-y-2">
//             <label htmlFor="emp_dob"className="text-sm font-semibold text-gray-700">Secondary Emergency Contact Number</label>
//             <input type="Date" id="emp_dob" name="emp_dob"  className="input input-bordered w-full" required />
//             </div>
            
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_gender" className="text-sm font-semibold text-gray-700">Gender</label>
//               <select id="emp_gender" name="emp_gender" className="input input-bordered w-full" required>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
           

//             <div className="flex flex-col space-y-2">
//               <label htmlFor="emp_marital_status" className="text-sm font-semibold text-gray-700">Marital Status</label>
//               <select id="emp_marital_status" name="emp_marital_status" className="input input-bordered w-full" required>
//                 <option value="single">Single</option>
//                 <option value="married">Married</option>
//                 <option value="divorced">Divorced</option>
//                 <option value="widowed">Widowed</option>
//               </select>
//             </div>
            
            
//             <div className="flex flex-col space-y-2">
//             <label htmlFor="emp_addhar_no" className="text-sm font-semibold text-gray-700">Aadhar Number</label>
//             <input type="text" id="emp_addhar_no" name="emp_addhar_no"className="input input-bordered w-full"  required />
//             <span><input type="file" accept="image/*"/></span>
//             </div>
            
//             <div className="flex flex-col space-y-2">
//             <label htmlFor="emp_pan_no" className="text-sm font-semibold text-gray-700">PAN Number</label>
//             <input type="text" id="emp_pan_no" name="emp_pan_no"className="input input-bordered w-full" required />
//             <span><input type="file" accept="image/*"/></span>
//             </div>
//             <div className="flex flex-col space-y-2">
//             <label htmlFor="emp_passport_no" className="text-sm font-semibold text-gray-700" >Passport Number</label>
//             <input type="text" id="emp_passport_no" name="emp_passport_no"className="input input-bordered w-full"  />
//             <span><input type="file" accept="image/*"/></span>
//             </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
//             <div className="flex flex-col space-y-2">
//             <label htmlFor="emp_father_name" className="text-sm font-semibold text-gray-700">Father's Name</label>
//             <input type="text" id="emp_father_name" name="emp_father_name" className="input input-bordered w-full"  required />
//             </div>
//             <div className="flex flex-col space-y-2"> 
//               <label htmlFor="emp_father_mobile_no" className="text-sm font-semibold text-gray-700">Father's Mobile Number</label>
//             <input type="tel" id="emp_father_mobile_no" name="emp_father_mobile_no" className="input input-bordered w-full" required />
//             </div>
//             <div className="flex flex-col space-y-2">
//             <label htmlFor="emp_mother_name" className="text-sm font-semibold text-gray-700">Mother's Name</label>
//             <input type="text" id="emp_mother_name" name="emp_mother_name" className="input input-bordered w-full"  required />
//             </div>
//             <div className="flex flex-col space-y-2" >
//               <label htmlFor="emp_mother_mobile_no "className="text-sm font-semibold text-gray-700">Mother's Mobile Number</label>
//             <input type="tel" id="emp_mother_mobile_no" name="emp_mother_mobile_no"className="input input-bordered w-full" required />
//             </div>
//             <div className="flex flex-col space-y-2"> 
//                <label htmlFor="emp_emergency_contact_name_prime"className="text-sm font-semibold text-gray-700">Primary Emergency Contact Name</label>
//             <input type="text" id="emp_emergency_contact_name_prime" name="emp_emergency_contact_name_prime" className="input input-bordered w-full" required />
//             </div>
//             <div className="flex flex-col space-y-2"> 
//               <label htmlFor="emp_emergency_contact_no_prime"className="text-sm font-semibold text-gray-700">Primary Emergency Contact Number</label>
//             <input type="tel" id="emp_emergency_contact_no_prime" name="emp_emergency_contact_no_prime" className="input input-bordered w-full" required />
//             </div>
//             <div className="flex flex-col space-y-2">
//             <label htmlFor="emp_emergency_contact_name_second"className="text-sm font-semibold text-gray-700">Secondary Emergency Contact Name</label>
//             <input type="text" id="emp_emergency_contact_name_second" name="emp_emergency_contact_name_second"  className="input input-bordered w-full" required />
//             </div>
//             <div className="flex flex-col space-y-2">
//             <label htmlFor="emp_emergency_contact_no_second"className="text-sm font-semibold text-gray-700">Secondary Emergency Contact Number</label>
//             <input type="tel" id="emp_emergency_contact_no_second" name="emp_emergency_contact_no_second"  className="input input-bordered w-full" required />
//             </div>
           
//           </div>
//           </div>

//         </div>

//         {/* Submit Button */}
//         <div className="text-center mt-8">

//           <button type='submit'className="border border-white-400 px-7 py-2 rounded mb-4 bg-royalblue text-white hover:bg-green-600 " >Save Changes</button>
        
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Profile;

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Profile = () => {

  const validationSchema = Yup.object({
    emp_id: Yup.string()
  .required('Employee ID is required')
  .matches(/^[0-9]+$/, 'Employee ID must be a numeric value'),  

    emp_first_name: Yup.string().required('First Name is required'),
    emp_last_name: Yup.string().required('Last Name is required'),
    emp_email_id: Yup.string().email('Invalid email').required('Email is required'),
    emp_mobile_prime: Yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number').required('Primary Mobile is required'),
    emp_mobile_second: Yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number').required('Secondary Mobile is required'),
    emp_dob: Yup.date().required('Date of Birth is required'),
    emp_current_address: Yup.string().required('Current Address is required'),
    emp_current_city: Yup.string().required('Current City is required'),
    emp_current_state: Yup.string().required('Current State is required'),
    emp_current_pincode: Yup.string().required('Current Pincode is required'),
    emp_permanent_address: Yup.string().required('Permanent Address is required'),
    emp_permanent_city: Yup.string().required('Permanent City is required'),
    emp_permanent_state: Yup.string().required('Permanent State is required'),
    emp_permanent_pincode: Yup.string().required('Permanent Pincode is required'),
    emp_grd_collage_name: Yup.string().required('Institute Name is required'),
    emp_grd_collage_degree: Yup.string().required('Degree is required'),
    emp_grd_collage_branch_name: Yup.string().required('Branch Name is required'),
    emp_grd_passing_year: Yup.string().required('Passing Year is required'),
    emp_grd_percentage: Yup.string().required('Percentage is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here, e.g., send it to an API
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Profile Details</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Details Section */}
        <div className="collapse collapse-arrow bg-base-200 rounded-lg pb-10">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium px-4 py-4 bg-gray-100">
            Personal Details
          </div>
          <div className="collapse-content px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_id" className="text-sm font-semibold text-gray-700">Employee ID</label>
                <input type="text" id="emp_id" name="emp_id" {...register('emp_id')} className="input input-bordered w-full" />
                {errors.emp_id && <p className="text-red-600 text-xs">{errors.emp_id.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_first_name" className="text-sm font-semibold text-gray-700">First Name</label>
                <input type="text" id="emp_first_name" name="emp_first_name" {...register('emp_first_name')} className="input input-bordered w-full" />
                {errors.emp_first_name && <p className="text-red-600 text-xs">{errors.emp_first_name.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_last_name" className="text-sm font-semibold text-gray-700">Last Name</label>
                <input type="text" id="emp_last_name" name="emp_last_name" {...register('emp_last_name')} className="input input-bordered w-full" />
                {errors.emp_last_name && <p className="text-red-600 text-xs">{errors.emp_last_name.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_email_id" className="text-sm font-semibold text-gray-700">Email ID</label>
                <input type="email" id="emp_email_id" name="emp_email_id" {...register('emp_email_id')} className="input input-bordered w-full" />
                {errors.emp_email_id && <p className="text-red-600 text-xs">{errors.emp_email_id.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_mobile_prime" className="text-sm font-semibold text-gray-700">Primary Mobile</label>
                <input type="tel" id="emp_mobile_prime" name="emp_mobile_prime" {...register('emp_mobile_prime')} className="input input-bordered w-full" />
                {errors.emp_mobile_prime && <p className="text-red-600 text-xs">{errors.emp_mobile_prime.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_mobile_second" className="text-sm font-semibold text-gray-700">Secondary Mobile</label>
                <input type="tel" id="emp_mobile_second" name="emp_mobile_second" {...register('emp_mobile_second')} className="input input-bordered w-full" />
                {errors.emp_mobile_second && <p className="text-red-600 text-xs">{errors.emp_mobile_second.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_dob" className="text-sm font-semibold text-gray-700">Date of Birth</label>
                <input type="date" id="emp_dob" name="emp_dob" {...register('emp_dob')} className="input input-bordered" />
                {errors.emp_dob && <p className="text-red-600 text-xs">{errors.emp_dob.message}</p>}
              </div>
            </div>

            <div className="font-semibold text-gray-700 py-10">
              <h2 className="current_add_detail">Current Address Details</h2>
            </div>

            <div className="flex flex-col space-y-2 pb-5">
              <label htmlFor="emp_current_address" className="text-sm font-semibold text-gray-700">Current Address</label>
              <textarea id="emp_current_address" name="emp_current_address" {...register('emp_current_address')} className="input input-bordered" />
              {errors.emp_current_address && <p className="text-red-600 text-xs">{errors.emp_current_address.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_current_city" className="text-sm font-semibold text-gray-700">Current City</label>
                <input type="text" id="emp_current_city" name="emp_current_city" {...register('emp_current_city')} className="input input-bordered" />
                {errors.emp_current_city && <p className="text-red-600 text-xs">{errors.emp_current_city.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_current_state" className="text-sm font-semibold text-gray-700">Current State</label>
                <input type="text" id="emp_current_state" name="emp_current_state" {...register('emp_current_state')} className="input input-bordered" />
                {errors.emp_current_state && <p className="text-red-600 text-xs">{errors.emp_current_state.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_current_pincode" className="text-sm font-semibold text-gray-700">Current Pincode</label>
                <input type="text" id="emp_current_pincode" name="emp_current_pincode" {...register('emp_current_pincode')} className="input input-bordered" />
                {errors.emp_current_pincode && <p className="text-red-600 text-xs">{errors.emp_current_pincode.message}</p>}
              </div>
            </div>

            <div className="font-semibold text-gray-700 py-10">
              <h2 className="current_add_detail">Permanent Address Details</h2>
            </div>

            <div className="flex flex-col space-y-2 pb-5">
              <label htmlFor="emp_permanent_address" className="text-sm font-semibold text-gray-700">Permanent Address</label>
              <textarea id="emp_permanent_address" name="emp_permanent_address" {...register('emp_permanent_address')} className="input input-bordered" />
              {errors.emp_permanent_address && <p className="text-red-600 text-xs">{errors.emp_permanent_address.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_permanent_city" className="text-sm font-semibold text-gray-700">Permanent City</label>
                <input type="text" id="emp_permanent_city" name="emp_permanent_city" {...register('emp_permanent_city')} className="input input-bordered" />
                {errors.emp_permanent_city && <p className="text-red-600 text-xs">{errors.emp_permanent_city.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_permanent_state" className="text-sm font-semibold text-gray-700">Permanent State</label>
                <input type="text" id="emp_permanent_state" name="emp_permanent_state" {...register('emp_permanent_state')} className="input input-bordered" />
                {errors.emp_permanent_state && <p className="text-red-600 text-xs">{errors.emp_permanent_state.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_permanent_pincode" className="text-sm font-semibold text-gray-700">Permanent Pincode</label>
                <input type="text" id="emp_permanent_pincode" name="emp_permanent_pincode" {...register('emp_permanent_pincode')} className="input input-bordered" />
                {errors.emp_permanent_pincode && <p className="text-red-600 text-xs">{errors.emp_permanent_pincode.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Education Details Section */}
        <div className="collapse collapse-arrow bg-base-200 rounded-lg pb-10">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium px-4 py-4 bg-gray-100">
            Education Details
          </div>
          <div className="collapse-content px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_grd_collage_name" className="text-sm font-semibold text-gray-700">Institute Name</label>
                <input type="text" id="emp_grd_collage_name" name="emp_grd_collage_name" {...register('emp_grd_collage_name')} className="input input-bordered w-full" />
                {errors.emp_grd_collage_name && <p className="text-red-600 text-xs">{errors.emp_grd_collage_name.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_grd_collage_degree" className="text-sm font-semibold text-gray-700">Degree</label>
                <input type="text" id="emp_grd_collage_degree" name="emp_grd_collage_degree" {...register('emp_grd_collage_degree')} className="input input-bordered w-full" />
                {errors.emp_grd_collage_degree && <p className="text-red-600 text-xs">{errors.emp_grd_collage_degree.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_grd_collage_branch_name" className="text-sm font-semibold text-gray-700">Branch Name</label>
                <input type="text" id="emp_grd_collage_branch_name" name="emp_grd_collage_branch_name" {...register('emp_grd_collage_branch_name')} className="input input-bordered w-full" />
                {errors.emp_grd_collage_branch_name && <p className="text-red-600 text-xs">{errors.emp_grd_collage_branch_name.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_grd_passing_year" className="text-sm font-semibold text-gray-700">Passing Year</label>
                <input type="text" id="emp_grd_passing_year" name="emp_grd_passing_year" {...register('emp_grd_passing_year')} className="input input-bordered w-full" />
                {errors.emp_grd_passing_year && <p className="text-red-600 text-xs">{errors.emp_grd_passing_year.message}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="emp_grd_percentage" className="text-sm font-semibold text-gray-700">Percentage</label>
                <input type="text" id="emp_grd_percentage" name="emp_grd_percentage" {...register('emp_grd_percentage')} className="input input-bordered w-full" />
                {errors.emp_grd_percentage && <p className="text-red-600 text-xs">{errors.emp_grd_percentage.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-8">
          <button type="submit" className="btn btn-primary">Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;


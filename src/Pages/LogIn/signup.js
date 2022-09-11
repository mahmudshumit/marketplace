import React from "react";
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
 
  const {
    register,
    watch,
    
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});


  const [updateProfile, updating, updateError] = useUpdateProfile(auth);




  const navigate= useNavigate();

 const password = watch('password')


  let signInError;
  
  


  if ( loading  || gloading ||updating) {
    return <Loading></Loading>
  }



  if(error || gerror || updateError){
    signInError= <p className='text-red-500'><small>{error?.message || gerror?.message || updateError?.message}</small></p>
  }


  if (user|| guser) {
    console.log(guser);
  }

//   const verifyEmail=() =>{
   
// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     // ...
//     console.log("email");
//   });
//   }

  
  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email,data.password,data.cpassword);
    await updateProfile({ displayName:data.name });

    console.log("done");
     navigate('/login');
    
  };


    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">SignUp</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                   
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="your name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                           
                        </label>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="confirmpassword"
                            placeholder="confirmpassword"
                            className="input input-bordered w-full max-w-xs"
                            {...register("confirmpassword", {
                                required: true,
                                validate: (value) => {
                                  if (watch('password') != value) {
                                    return "Your passwords do no match";
                                  }
                                },
                               })}
                        />
                        <label className="label">
                            {errors.confirmpassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmpassword.message}</span>}
                            
                            
                        </label>
                    </div> */}

                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">confirm Password</span>
                        </label>
                        <input
                            type="confirmpassword"
                            placeholder="confirmpassword"
                            className={`w-full h-14 rounded-lg ${ errors.confirmPassword &&
                                "focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                            {...register("confirmPassword",
                            
                            { required: 'confirm password is required',
                            validate: (value) =>
                            value === password || "The passwords do not match",
                         })}
                          />
                          {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}
                    </div>
                     

                    {signInError}
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                </form>
                 <p><small>Already have an account? <Link className='text-primary' to="/login">Please log In</Link></small></p> 
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline"
                >Continue with Google</button>
            </div>
        </div>
    </div >
    );
}

export default Signup;

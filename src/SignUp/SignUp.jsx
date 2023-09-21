import React from 'react';
import ResuableForm from '../ResuableForm/ResuableForm';

const SignUp = () => {
    
    const handleSignUp = data => {
        // console.log(data)
    }
    const handleUpdate = data => {
        // console.log(data)
    }

    return (
        <div>
            
            <ResuableForm title={'SignUp'} handleSubmitForm={handleSignUp}></ResuableForm>
            <ResuableForm title={'Update'} handleSubmitForm={handleUpdate} submitBtnText='Update'></ResuableForm>
            
        </div>
    );
};

export default SignUp;
import React from 'react';

const ResuableForm = ({title,handleSubmitForm, submitBtnText='Submit'}) => {

   const handleSubmitLocalForm = e => {
      e.preventDefault()
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }
      
     console.log(data)
     handleSubmitForm(data)
   }
    return (
      <div>
        <div className="bg-cyan-400 p-2 w-1/2 mx-auto">
            <h1 className='text-center font-bold'>{title}</h1>
          <div className='w-1/2 mx-auto'>
            <form onSubmit={handleSubmitLocalForm}>
              <div>
                <h1>Name:</h1>
                <input type="text" name='name' />
              </div>
              <div>
                <h1>Email</h1>
                <input type="email" name="email" id="" />
              </div>
              <div>
                <h1>Password</h1>
                <input type="password" name="password" id="" />
              </div>
              <input
                className="bg-orange-400 p-3 mt-3"
                type="submit"
                value={submitBtnText}
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default ResuableForm;
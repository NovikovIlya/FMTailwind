import { useRef } from "react"


function FormComponents() {
  const formRef = useRef<HTMLFormElement>(null)
  
  const send = (e: any) => {
    e.preventDefault()
    alert('Your text send!')
    if (formRef.current) {
      formRef.current.reset(); 
    }
  }

  return (
    <div className='p-8'>
      <div className='bg-indigo-950 text-white mb-5 rounded-lg p-2'>
        <p>Try it free 7 days then $20/mo. thereafter</p>
      </div>
      <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-md">


        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form ref={formRef} className="space-y-6" >
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  placeholder='First Name'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  placeholder='Last Name'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Emai'
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Password'
                />
              </div>
            </div>

            <div>
              <button
                onClick={(e)=>send(e)}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Claim yout free tril
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormComponents

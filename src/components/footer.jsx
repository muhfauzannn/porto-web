import RealTimeClock from './time';

export default function Footer() {

    return(
      <>
      <div className='bg-white text-black flex justify-center'>
        <div className='w-10/12 py-36 flex flex-col gap-20'>
          <div className='border-2 w-fit h-fit self-center rounded-md border-black bg-black group hover:bg-white transition-all'>
            <p className='font-calora text-8xl p-8 w-max max-md:text-6xl max-sm:text-3xl text-white group-hover:text-black'>Muhammad Fauzan</p>
          </div>
  
          <div className='flex justify-between items-center gap-20 max-md:flex-col'>
            <div>
              <p className='text-base'>Made with Love by Fauzan in Jakarta, Indonesia.</p>
              <p className='text-4xl w-max max-md:w-fit'> <span className='opacity-50'>Local time -</span> <RealTimeClock /> </p>
            </div>
  
            <div className='flex flex-row-reverse flex-wrap gap-10 max-md:flex-col'>
  
              <a href='https://www.instagram.com/mfauuzaannn/'>
                <div className='flex w-60 justify-between py-4 px-3 border-2 border-black rounded-md group hover:bg-black'>
                  <p className='group-hover:text-white'>Instagram</p>
                  <i className="fi fi-br-arrow-up-right group-hover:text-white"></i>
                </div>
              </a>
  
              <a href='https://wa.me/6285155349773/'>
                <div className='flex w-60 justify-between py-4 px-3 border-2 border-black rounded-md group hover:bg-black transition-all'>
                  <p className='group-hover:text-white '>WhatsApp</p>
                  <i className="fi fi-br-arrow-up-right group-hover:text-white"></i>
                </div>
              </a>
  
              <a href='https://www.linkedin.com/in/muhammad-fauzan14/'>
                <div className='flex w-60 justify-between py-4 px-3 border-2 border-black rounded-md group hover:bg-black transition-all'>
                  <p className='group-hover:text-white'>Linkedin</p>
                  <i className="fi fi-br-arrow-up-right group-hover:text-white"></i>
                </div>
              </a>
  
              <a href='https://x.com/mineszero14'>
                <div className='flex w-60 justify-between py-4 px-3 border-2 border-black rounded-md group hover:bg-black transition-all'>
                  <p className='group-hover:text-white'>Twitter</p>
                  <i className="fi fi-br-arrow-up-right group-hover:text-white"></i>
                </div>
              </a>
            
            </div>
          </div>
  
          <p className='text-xs'>© 2024 FAUZAN. ALL RIGHT RESERVED.</p>
        </div>
      </div>
      </>
    )
  }
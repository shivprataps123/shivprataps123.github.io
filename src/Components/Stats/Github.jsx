
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import("./Github.css");
const Github = () => {
  return (
    <div className='githead-div'>
        <h1 className="githead">
          GitHub Statistics & Calender section
        </h1>



        
            <div className='calendar'>
                <GitHubCalendar
                    username="shivprataps123"
                    blockSize={15}
                    blockMargin={5}
                    color="blue"
                    fontSize={15}
                />
            </div>


           <div className='stats'>
            <div className='stats1'>
            <img className='img1' src="https://github-readme-stats.vercel.app/api/top-langs?username=shivprataps123&show_icons=true&locale=en&layout=compact" alt="shivprataps123" />
            </div>
            <div className='stats2'>
            <img className='img2'  src="https://github-readme-streak-stats.herokuapp.com/?user=shivprataps123&" alt="shivprataps123" />
            </div>
            <div className='stats3'>
            <img  className='img3' src="https://github-readme-stats.vercel.app/api?username=shivprataps123&show_icons=true&locale=en" alt="shivprataps123" />
            </div>
            </div>

            
           
        
        </div>



  
  )
}

export default Github
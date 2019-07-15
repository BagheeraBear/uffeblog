import React from 'react'

function Footer(){
    const date = new Date()
    
    return(
    <footer>
        <div className="footer">
            
          <p>The footer of Web Development Blog By Uffe - 2019 - {date.getHours()}</p>
        </div>
        </footer>
    )
}

export default Footer
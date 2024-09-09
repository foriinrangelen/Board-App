import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Logo = ({className}) => {
  return (
    
          <div className={`boxes ${className}`}>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png"} className="logo react" alt="React logo" />
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={"https://cdn-icons-png.flaticon.com/512/919/919853.png"} className="logo react" alt="React logo" />
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yarn-logo-kitten.svg/1920px-Yarn-logo-kitten.svg.png"} className="logo react" alt="React logo" />
          <img src={"https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"} className="logo nest" alt="nest logo" />
          <img src={"https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png"} className="logo nest" alt="nest logo" />
          <img src={"https://avatars.githubusercontent.com/u/18133?s=200&v=4"} className="logo nest" alt="nest logo" />
          <img src={"https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png"} className="logo" alt="Vite logo" />
          <img src={"https://svgur.com/i/943.svg"} className="logo" alt="Vite logo" />
          <img src={"https://www.cdnlogo.com/logos/j/20/jwt.svg"} className="logo" alt="Vite logo" />
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/120px-Postgresql_elephant.svg.png"} className="logo" alt="Vite logo" />
          <img src={"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"} className="logo" alt="Vite logo" />
        </div>
    
  )
}

export default Logo

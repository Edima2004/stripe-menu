import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubMenuOpen, location, page:{page, links}}= useGlobalContext();
  const [columns, setColumns] = useState('col-2')
  const container = useRef(null)
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    const {center, bottom, width} = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    //submenu.style.width= `${width *2.25}px`

    if (links.length === 3){
      setColumns('col-3')
    }
    if (links.length > 3){
      setColumns('col-4')
    }
  }, [location, links])
  
  return <aside className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`} ref= {container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link, index)=>{
        const {label, icon, url}= link
        return(
          <a href={url} key={index}>
            {icon}
            {label}
          </a>
        )
      })}
    </div>
  </aside>
}

export default Submenu

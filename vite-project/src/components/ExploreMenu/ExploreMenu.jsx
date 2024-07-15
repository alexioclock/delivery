import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Voir nos menus</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, aliquam tempore. Unde assumenda impedit aut nulla vero? Qui iusto commodi perspiciatis expedita nostrum suscipit reprehenderit, itaque provident labore iste accusantium?
        Dignissimos porro suscipit minus veniam, maxime, adipisci nisi vitae dicta consequatur, aut officia rerum sed molestiae facilis. Quisquam qui id magni, quasi aut beatae eum atque ea minus, unde dolore!</p>
      <div className='explore-menu-list'>
      {menu_list.map((item, index) =>{
        return(
            <div onClick={() => setCategory(e=> e===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
        )
      })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu

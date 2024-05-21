import React from 'react'
import { Link } from 'react-router-dom'
import Edit from "../img/delete.png"
import  Delete from "../img/edit.png"
import Menu from '../components/Menu'
const Single = () => {
  return (
    <>
    <div className="single">
        <div className="content">
            <img src='https://images4.alphacoders.com/271/271158.jpg' alt=""></img>
            <div className='user-wrapper'>
            <div className='user'>
                <img src="https://images4.alphacoders.com/271/271158.jpg" alt=''></img>
                <div className='info'>
                    <span>Anjali</span>
                    <p>Posted 2 days ago</p>
                </div>
            </div>
            <div className='edit'>
                <Link to="/write">
                <img src={Edit} alt=''></img>
                </Link>
                <Link>
                <img src={Delete} alt=''></img>
                </Link>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quaerat recusandae a totam, dolorem corporis sit possimus enim illo repudiandae eveniet saepe aperiam officiis aut blanditiis eius velit nemo porro.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis maiores quo voluptatibus commodi eum temporibus velit, labore deleniti, fuga nisi reprehenderit doloribus vitae illum obcaecati ex! Sint, molestias ullam.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quaerat recusandae a totam, dolorem corporis sit possimus enim illo repudiandae eveniet saepe aperiam officiis aut blanditiis eius velit nemo porro.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis maiores quo voluptatibus commodi eum temporibus velit, labore deleniti, fuga nisi reprehenderit doloribus vitae illum obcaecati ex! Sint, molestias ullam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit impedit consequatur perferendis laboriosam distinctio repellat nam, exercitationem quo maxime, nemo provident, laudantium dolore dignissimos. Temporibus quos earum voluptas laudantium
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit impedit consequatur perferendis laboriosam distinctio repellat nam, exercitationem quo maxime, nemo provident, laudantium dolore dignissimos. Temporibus quos earum voluptas laudantium?
            </p>
        </div>
        <div className="menu">
            <Menu></Menu>
        </div>
    </div>
    </>
  )
}

export default Single
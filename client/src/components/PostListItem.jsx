import React from 'react'
import Image from './Image';
import { Link } from 'react-router-dom';

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* Image */}
        <div className='md:hidden xl:block'>
            <Image src="postImg.jpeg" className={"rounded-2xl object-cover"} w="704" />
        </div>

        {/* Details */}
        <div className='flex flex-col gap-2'>
            <Link to="/test" className='text-4xl font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Link>

            <div className='flex items-center gap-2 text-gray-400 text-sm'>
                <span>Written by</span>
                <Link className='text-gray-300 underline'>Jhon Doe</Link>
                <span>on</span>
                <Link className='text-gray-300 underline'>Web Design</Link>
                <span>3 days ago</span>
            </div>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque eos sequi dolore ratione quaerat doloremque eaque soluta aperiam repellat ipsam harum voluptatibus, architecto dolores?
            </p>

            <Link to={"/test"}  className='underline text-gray-300'>Read more</Link>
        </div>
    </div>
  )
}

export default PostListItem;
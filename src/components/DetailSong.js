import React, { useContext } from 'react';
import { Songs } from '../Context';

const DetailSong = () => {
    const { song } = useContext(Songs);
    console.log(song);
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-[#38bdf8] font-bold mb-2'>Now playing</h2>
            <h2 className='text-2xl text-[#a3a3a3] mb-28'>{song.name}</h2>

            <div className='flex justify-center mb-10'>
                <img className='w-[320px]' src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className='flex justify-around items-center'>
                <img className='w-[70px] rounded-full' src={song.links.images[1].url} alt="avatar" />
                <span className='text-xl text-[#a3a3a3] cursor-pointer'>{song.author}</span>
            </div>
        </div>
    );
};

export default DetailSong;
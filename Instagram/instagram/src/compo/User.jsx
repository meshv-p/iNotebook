import React , {useState} from "react";
import Button from '@mui/material/Button';

export const User = () => {
  let m = [1,2,3,4,5,6,11,7,8,9,10];

   let btns = ['Post','Videos','Saved'];
    const [current, setCurrent] = useState('Post');

  return (
    <>
      <div className="userprofile ">
        <div className="firstpart  flex border mt-10 pl-10 container bg-gray-50">
          <div className="img  flex-grow justify-center flex w-60 p-2 items-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/notifications/n_1.png"
              alt=""
              className="object-cover rounded-full shadow border-1 border-red-500  lg:w-44 lg:h-44 w-16 h-16"
            />
          </div>
          <div className="User_details  ml-5 w-100">
            <div className="User_name  pl-10">
              <p className="font-bold mt-2 mb-0">Ashley Wilson</p>
              <p className="text-sm text-gray-500 mt-1 italic">@AshleyWill</p>
            </div>
            <div className="User__number flex  gap-1.5 mt-4">
              <div className="posts  ml-10 mr-2 flex flex-col items-center">
                <span className="font-bold ">11</span>
                <span className="text-gray-500 text-sm border-t">Posts</span>
              </div>
              <div className="follower mx-2 flex flex-col items-center">
                <span className="font-bold">1220</span>
                <span className="text-gray-500 text-sm border-t">Followers</span>
              </div>
              <div className="following  mx-2 flex flex-col items-center">
                <span className="font-bold">12</span>
                <span className="text-gray-500 text-sm border-t">Following</span>
              </div>
            </div>
            <div className="Btns mt-3 flex ml-10 gap-4">
            <Button variant="contained">Follow</Button>
            <Button variant="outlined" color="info">Message</Button>
              {/* <button className="bg-blue-500 text-gray-200 border-1  border-gray-500 focus:ring-2 focus:border-indigo-600 rounded py-1 px-2  hover:bg-indigo-500">Follow</button> */}
              {/* <button className="border-gray-500 hover:bg-gray-500 text-gray-600 border-1  focus:border-green-500 focus:ring-2 ring-green-400 hover:text-white border rounded py-1 px-2">Message</button> */}
            </div>

          </div>
        </div> <hr className="w-4/5 mx-auto mb-0" />
        <div className="middlepart flex  justify-center">
          {btns.map((e)=>{
            return (
          <button className={e===current? 'middle Videos  font-bold text-gray-500 mr-10 p-1 pt-2 border-t-4 rounded-t border-indigo-700 text-indigo-700' : 'middle Videos font-bold text-gray-500 mr-10 p-1 pt-2'} onClick={()=>{setCurrent(e)}} key={e} id="videos">{e}</button>
            );
        })}
          {/* <button className="middle  post text-gray-500 font-bold border-t-2 border-indigo-700 text-indigo-700 p-1 pt-2 mr-10" id="post">Post</button>
          <button className={`middle Videos font-bold text-gray-500 mr-10 p-1 pt-2`} id="videos">Videos</button>
          <button className="middle  Saved  font-bold text-gray-500 mr-10 p-1 pt-2" id="saved">Saved</button> */}
        </div>

        <div className="secondpart border-l border-r container">
          <div className="Allposts flex flex-row flex-wrap mt-2 h-full justify-center">
            {m.map((e) => {
              return (<div className="img  w-80  m-2 hover:opacity-50 cursor-pointer mb-5 h-full" key={e}><img src="https://source.unsplash.com/random" alt=""
                className="object-fill shadow border-1 border-red-400 h-72 w-72  mx-auto"
              /></div>)
            })}
          </div>

        </div>
      </div>
    </>
  );
};

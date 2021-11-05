import React , {useState , useEffect} from "react";
import Typography from "@mui/material/Typography";
// import $ from 'jquery';
export const Notification = () => {

    const [noti, setNoti] = useState([])
    let sms = [
      'Lets meet at bar at 9:00pm tonight.',
      'Hey whats app??', 'Hmm good ideas of yours ', 'this is that?', "Good to see you...",
      'hey', 'Follows You..', 'good luck for your exam','I hope every things will be fine', 'hey I hope you will be reached there'
    ]
  let fetchdata = async ()=>{
    let link = `https://randomuser.me/api/?page=1&results=10`;
    let data = await fetch(link);
    let json = await data.json();
    console.log(json);
    console.log(typeof json.results[1]);
    setNoti(json.results);
}

useEffect(  () => {
   fetchdata();
   // eslint-disable-next-line
}, [])
  
  let handleremove = ()=>{
      console.log("hey");
        // $(this).hide();
  }


  return (
    <>
      <Typography
        className="text-center m-2"
        variant="h5"
        color="textSecondary"
      >
        Your Notification ...
      </Typography>
      <div className="container lg:all__notification">
      {noti.map((e,index) => {
        return (
          <div className="flex border mt-3 bg-gray-100 shadow-2xl rounded w-full mx-auto" key={e.cell}>
            <div className="pic border-r border-gray-400 p-2 flex items-center">
              <div className="w-10 sm:h-12 lg:w-12 rounded-full">
                {/* <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/notifications/n_1.png" alt=""
                  className="h-full w-full object-cover rounded-full shadow"
                /> */}
                <img src={e.picture.medium} alt=""
                  className="h-full w-full object-cover rounded-full shadow"
                />
              </div>
            </div>
            <div className="contant  border-r border-gray-400 w-3/5 flex-1">
              <div className="flex flex-col justify-center pl-4 w-full ">
                <p className="text-sm text-gray-800 pt-1 mt-3 mb-0 dark:text-gray-100 font-semibold">
                  {e.name.first}
                </p>
                {/* <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                  Lets meet at bar at 9:00pm tonight.
                </p> */}
                <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                  {sms[index]}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center  items-center dark:border-gray-700 w-1/3 sm:w-1/6">
              <div className="pt-2 pb-2 border-b border-gray-300 dark:border-gray-700 w-full flex justify-center">
                <span className="text-sm text-blue-500 font-bold cursor-pointer">
                  Reply
                </span>
              </div>
              <div
                className="pt-2 pb-2 flex justify-center w-full cursor-pointer"
                
              >
                <span className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer" onClick={handleremove}>
                  Dismiss
                </span>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

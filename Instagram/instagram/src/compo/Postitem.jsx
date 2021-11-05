import React from 'react'

export const Postitem = (props) => {

    return (
        <div>
            <div className=" Main__content_out sm\:container sm\:m-auto m-1">
            <div className="Main__contents   border-1 border-gray-400 rounded-lg m-auto ">
                <div className="Main__icon flex mt-1">
                    <div className="Main__User__Profile w-10 border-gray-900 flex m-auto mx-1">
                        <img src={props.pic} alt="" />
                        {/* <!-- <i className="fa fa-user-circle-o" style="border: 1px solid red;"></i> --> */}
                    </div>
                    <div className="Main__User__Contain  w-11/12 pl-2">
                        <div className="Main__User__Name text-sm font-semibold">
                            <div className="Name border-b inline">
                            {props.name}
                            </div>
                            </div>
                        {/* <hr className="m-0 w-1/5" /> */}
                        <div className="Main__User__Place text-sm">{props.location}</div>
                    </div>
                    <div className="Main__User__Option w-11 p-2">
                        <button><i className="fa fa-ellipsis-v"></i></button>
                    </div>
                </div>
                {/* <hr className="m-0" /> */}
                {/* <!-- Picture Part --> */}
                <div className="Main__data mt-1">
                 {/* <!--  <img src="https://images.unsplash.com/photo-1632333650953-f68e8b3d5f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzA5Nzk2NA&ixlib=rb-1.2.1&q=80&w=1080" alt=""> --> */}
                     <img src={props.main_pic} alt="" id="Main_Picture" /> 
                </div>
                <hr id="hr1" />


                {/* <!-- Comment Part --> */}
                <div className="Main__comment h-20">
                    <div className="Main__Comment__Part grid ">
                        <div className="Main__Like"><button className="text-xl" ><i className="fa fa-heart-o"
                                    id="Like_btn"></i></button></div>
                        <div className="Main__Comment"><button className="text-xl" ><i
                                    className="fa fa-comment-o" id="Comment_btn"></i></button></div>
                        <div className="Main__Share"><button className="text-xl"><i className="fa fa-share"></i></button></div>
                        <div className="Main__Save"></div>
                    </div>
                    <div className="Main__Comment_All">
                        <strong className="cursor-pointer">{props.name}</strong> This is picture is amazing of mine..... 
                    </div>
                    <div className="Main__items flex">
                        <div className="Emoji"><i className="fa fa-empire"></i></div>
                        <div className="Main__Input w-2/3 ml-5 ">
                            <input type="text"
                                className="border-t-0 border-r-0 border-l-0 w-full rounded focus:border-green-400 focus:outline-none  focus:ring"
                                name="" placeholder="Comment..." />
                        </div>
                        <div className="Main__Save  ml-3">
                            <i className="fa fa-bookmark"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

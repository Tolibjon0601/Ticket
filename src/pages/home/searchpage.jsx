import React, { useState } from "react";

function Searchpage() {



  return (
<div className="flex flex-col justify-center">
<input type="text" className="search_input mx-auto mt-12" />

<div className=" flex gap-5 justify-center mt-12">
<div className="flex p-[6px]  gap-5 bg-[#1D1D1D]  rounded-[12px]   max-w-[570px]">
<div >
				<img src="./image/ticket_img5.png" alt="" />
			</div>
			<div>
				<h2 className="text-2xl mb-5 mt-6">Кунг Фу Панда 4</h2>
    <ul className="flex gap-[6px] mb-4 ">

     <li><p className="text-medium text-[14px] text-textcolor" >RU </p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >•</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >6+</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >•</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >1ч 34м / 94 минут</p></li>
    </ul>

    <button className="py-4 px-[100px] bg-main_color rounded-xl mt-24 " >О фильме</button>			</div>

</div>
<div className="flex p-[6px]  gap-5 bg-[#1D1D1D]  rounded-[12px]  max-w-[570px]">
<div >
				<img src="./image/ticket_img3.png" alt="" />
			</div>
			<div>
				<h2 className="text-2xl mb-5 mt-6">Кунг Фу Панда 4</h2>
    <ul className="flex gap-[6px] mb-4 ">

     <li><p className="text-medium text-[14px] text-textcolor" >RU </p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >•</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >6+</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >•</p></li>
     <li><p className="text-medium text-[14px] text-textcolor" >1ч 34м / 94 минут</p></li>
    </ul>

    <button className="py-4 px-[100px] bg-main_color rounded-xl  mt-24" >О фильме</button>			</div>

</div>
</div>

</div>
  );
}

export default Searchpage;

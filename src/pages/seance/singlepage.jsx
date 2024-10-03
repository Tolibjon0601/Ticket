import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchData from '../../assets/hooks/useFetchData';
// import { IoIosArrowBack } from 'react-icons/io';

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetchData(`https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className='flex flex-col max-w-[600px] max-h-[900px] items-center mx-auto'>
      {/* <IoIosArrowBack onClick={() => navigate(-1)} /> */}
      <img src={data.image} alt="" />
      <h1 className='text-4xl mb-6'>{data.title}</h1>
      <p className='text-xl '>{data.description}</p>
    </div>
  );
}

export default SinglePage;

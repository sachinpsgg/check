"use client";
import React, {useState} from "react";
import {Back, FilterIcon, GridIcon, ListIcon, SearchIcon} from "@/components/Icon";
import Link from "next/link";
import {DoctorCard} from "@/components/DoctorCard";
import Image from "next/image";

export default function Home() {
  const [dataView,setDataView] = useState("grid");
  const [expandedCard, setExpandedCard] = React.useState(null);

  const doctors = [
    {
      name: 'Dr. Tejas Sharma',
      phone: '+91 98765 43210',
      specialty: 'Gynaecology',
      expertise: 'Gynaecology',
      gender: 'Male',
      sessionMode: 'In-Person & Online',
      fee: '₹1,500/-',
      image: '/Tejas.png',
    },
    {
      name: 'Dr. Priya Kapoor',
      phone: '+91 98765 43210',
      specialty: 'IVF Specialist',
      expertise: 'IVF Specialist',
      gender: 'Female',
      sessionMode: 'In-Person & Online',
      fee: '₹1,000/-',
      image: '/Priya.png',
    },
    {
      name: 'Dr. Pranav Saxena',
      phone: '+91 98765 43210',
      specialty: 'Gynaecology',
      expertise: 'Gynaecology',
      gender: 'Male',
      sessionMode: 'In-Person & Online',
      fee: '₹2,500/-',
      image: '/Pranab.png',
    },
    {
      name: 'Dr. Toshib Bagde',
      phone: '+91 98765 543210',
      specialty: 'Psychologist',
      expertise: 'Psychologist',
      gender: 'Male',
      sessionMode: 'In-Person & Online',
      fee: '₹3,500/-',
      image: '/Toshib.png',
    },
  ];
  const toggleView = () => {
    setDataView(dataView === "grid" ? "list" : "grid");
  };
  return (
      <div className="pt-2 overflow-scroll h-screen bg-gradient-to-b from-[#DFDAFB] to-[#F9CCC5] font-quicksand">
        <div className="flex items-center mb-4 gap-4">

          <Link href="/">
            <Back/>
          </Link>
          <h1 className="text-[14px] font-semibold">Available Psychologists</h1>
        </div>
        <div className="bg-gradient-to-b from-[#DFDAFB] to-[#F9CCC5]">
          <div className="flex items-center space-x-2  p-4 rounded-lg">
            <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full">
              <input
                  type="text"
                  placeholder="Search Psychologists..."
                  className="bg-transparent outline-none text-gray-500 w-full"
              />
              <SearchIcon/>
            </div>
            <button className="bg-white p-3  rounded-lg" onClick={toggleView}>
              {dataView === "grid" ? <ListIcon /> : <GridIcon/>}
            </button>
            <button className="bg-white p-3 rounded-lg">
              <FilterIcon/>
            </button>
          </div>
          {dataView === "grid" ? (<div className="grid grid-cols-2 sm:grid-cols-2">
            {doctors.map((doctor, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg px-3 py-3 m-2">
                  <div className="flex justify-center"> <Image src={doctor.image} alt="img" width={210}
                               height={190}  className="rounded-3xl"/></div>
                  <div className="text-center mt-1">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold  text-[16px] text-[#000000]">{doctor.name}</p>
                      <p className="text-[#6D6A5D]">{doctor.specialty}</p>
                      <p className="text-[#6D6A5D] font-semibold">Session Fee:<span className="font-bold">{doctor.fee}</span></p>
                    </div>
                    <a href="/schedule">
                      <button
                          className="mt-4 px-4 py-4 font-semibold text-[#FFFFFF] bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] rounded-xl w-full">Book
                        Now
                      </button>
                    </a>
                  </div>
                </div>
            ))}
          </div>):(<div className="mt-10 p-3 h-screen">
            {doctors.map((doctor, index) => (
                <DoctorCard
                    key={index}
                    doctor={doctor}
                    expanded={expandedCard === index}
                    onToggle={() => setExpandedCard(expandedCard === index ? null : index)}
                />
            ))}
          </div>)}
        </div>
      </div>
  );
}

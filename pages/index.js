import { Alert, Button, Table } from "flowbite-react";
import React, { useState } from 'react'
import { useTheme } from "next-themes";

export default function Index() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: `cscd` },

  ];
  return (
    <main className="container mx-auto">

<div className="flex " dir="rtl">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen  pt-8 relative duration-300`}
      >
        <img
          src="./assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`inverted-border-radius relative flex rounded-tr-xl rounded-br-xl p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-[#fff]"
              } `}
            >
 
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
    <path stroke="#fff" stroke-linejoin="round" stroke-width="1.5" d="M29.536 13.022c1.05.975 1.575 1.462 1.852 2.1.278.637.278 1.353.278 2.786v10.426c0 3.142 0 4.714-.976 5.69S28.142 35 25 35H15c-3.143 0-4.714 0-5.69-.976-.977-.976-.977-2.548-.977-5.69V17.908c0-1.433 0-2.15.278-2.786.278-.638.803-1.125 1.852-2.1l3.703-3.438 1.297-1.205C17.615 6.382 18.691 5.383 20 5.383c1.309 0 2.384.999 4.536 2.996l1.297 1.205 3.703 3.438Z"/>
    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.666 35v-6.666a3.333 3.333 0 1 1 6.667 0v6.667"/>
  </svg>
  
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
      <div>
        {/* <h2 className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}>LIGHT MODE</h2>
        <h2 className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-white `}>DARK MODE</h2> */}
                <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
            Toggle Mode
        </button>
    <Table>
  <Table.Head>
    <Table.HeadCell>
      Product name
    </Table.HeadCell>
    <Table.HeadCell>
      Color
    </Table.HeadCell>
    <Table.HeadCell>
      Category
    </Table.HeadCell>
    <Table.HeadCell>
      Price
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
        Edit
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Apple MacBook Pro 17"
      </Table.Cell>
      <Table.Cell>
        Sliver
      </Table.Cell>
      <Table.Cell>
        Laptop
      </Table.Cell>
      <Table.Cell>
        $2999
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Microsoft Surface Pro
      </Table.Cell>
      <Table.Cell>
        White
      </Table.Cell>
      <Table.Cell>
        Laptop PC
      </Table.Cell>
      <Table.Cell>
        $1999
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Magic Mouse 2
      </Table.Cell>
      <Table.Cell>
        Black
      </Table.Cell>
      <Table.Cell>
        Accessories
      </Table.Cell>
      <Table.Cell>
        $99
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
</div>
      </div>
    </div>


</main>
  )
}

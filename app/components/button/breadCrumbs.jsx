import React from 'react';

export default function BreadCrumbs() {
  return (
    <nav className="w-full rounded-md bg-neutral-100 px-5 py-3 dark:bg-neutral-600">
      <ol className="list-reset flex">
        <li>
          <a
            href="#"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Home
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-300">
            /
          </span>
        </li>
        <li>
          <a
            href="#"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Library
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-300">
            /
          </span>
        </li>
        <li className="text-neutral-500 dark:text-neutral-300">Data</li>
      </ol>
    </nav>
  );
}
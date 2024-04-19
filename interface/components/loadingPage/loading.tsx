
import React from 'react';
const count = 6

const LoadingPage = () => {
    const loadingPages = []

    for (let i = 0; i < count; i++){
        loadingPages.push(
        <div key={i} className='p-6 border rounded-lg shadow-lg'>
            <div role="status" className=" animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        )
    }
    return ( 
        <div className='grid grid-cols-3 gap-4'>
            {loadingPages}
        </div>
    );
}
 
export default LoadingPage;

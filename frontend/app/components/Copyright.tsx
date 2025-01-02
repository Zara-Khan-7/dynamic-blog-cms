"use client"
import React, {use, useEffect, useState} from 'react';

const Copyright = ({blog} : {blog:string}) => {
    const [currentYear, setCurrentYear] = useState<number>(
        new Date().getFullYear()
    );
    useEffect(() => {
        const interVAlid = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000) 

        return () => {
            clearInterval(interVAlid);
        }
        }, []);

        return(
            <div>
                <p className='className= text-sm text-gray-600'>
                    &copy; Copyright {currentYear} {blog}. All rights reserved.
                </p>
            </div>
        )
   
}

export default Copyright
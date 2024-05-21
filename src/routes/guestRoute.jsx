/*
Guest route if for users who are not authenticated
*/

"use client"

import { Fragment, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { useUserContext } from '@/context/auth';
import LoadingSpinner from '@/components/ui/loading';

const GuestRoute = ({ children }) => {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useUserContext()

    useEffect(() => {
        if (!isLoading) {
            isAuthenticated && router.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isLoading]);

    return (
        <Fragment>
            {(isLoading) &&
                <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-10 bg-white">
                    <LoadingSpinner />
                </div>}
            {children}
        </Fragment>
    )
}

export default GuestRoute

import React from 'react'
import CompanyCard from './CompanyCard'

const CompaySection = () => {
    return (
        <div className=' h-max/2  my-8 flex flex-col justify-center items-center'>
            <p className='font-semibold text-dimWhite'> Used by engineers from</p>
            <div className='  flex flex-row-5 max-w-[1200px] mx-auto flex-wrap justify-center'>
                <CompanyCard name={"Google"} />
                <CompanyCard name={"Facebook"} />
                <CompanyCard name={"Amazon"} />
                <CompanyCard name={"Microsoft"} />
                <CompanyCard name={"Uber"} />
                <CompanyCard name={"Apple"} />
                <CompanyCard name={"Square"} />
                <CompanyCard name={"Robinhood"} />
                <CompanyCard name={"Phone Pe"} />
                <CompanyCard name={"Dropbox"} />
            </div>
        </div>
    )
}

export default CompaySection
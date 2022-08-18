import React from 'react'

const CompanyCard = ({name}) => {
    return (
        <div className="m-4 container bg-card font-bold border rounded-lg items-center flex justify-center p-4 max-w-[200px] border-secondary">
            <h1>{name}</h1>
        </div>
    )
}

export default CompanyCard
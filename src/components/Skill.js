import React, { useState, useEffect } from 'react'

function Skill({ skill, percentage }) {
    const [collapsed, setCollapsed] = useState(true);
    useEffect(() => {
        setTimeout(() => setCollapsed(false), 300)

    }, []);
    
    return (
        <div>
            <div className='details'>
                <span>{skill}</span>
                <div className='bar' >
                    <div id='innerBar' className={`${collapsed ? 'collapsed' : ''}`}
                        style={{
                            width: `${percentage}%`,
                            height: '100%',
                            backgroundColor: `${percentage >= 75 ? '#008000' : '#50C878'}`,
                            transition: 'width 1300ms ease-in-out'
                        }}
                    ></div>
                </div>
                <span>{percentage}%</span>
            </div>
        </div>
    )
}

export default Skill
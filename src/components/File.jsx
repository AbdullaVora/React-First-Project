import { useState } from "react";

const File = ({ data }) => {
    const [showData, setShow] = useState(false);

    return (
        <div style={{ marginLeft: '20px',
        }}>
            <div className="hover"
                onClick={() => setShow(!showData)} 
                style={{
                    cursor: 'pointer', 
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 10px',
                    fontSize: '25px',
                    borderRadius: '10px',
                    backgroundColor: showData && data.isFolder ? 'gray' : 'transparent',
                    transition: 'background-color 0.4s ease'
                }}
            >
                <span style={{ marginRight: '10px' }}>
                    {data.isFolder ? (showData ? '📂' : '📁') : '📄'}
                </span> 
                <span>{data.name}</span>
            </div>
            <div 
                style={{
                    marginLeft: '20px',
                    display: showData ? "block" : "none",
                    borderLeft: '1px solid #ccc',
                    paddingLeft: '10px',
                    marginTop: '5px'
                }}
            >
                {data.isFolder && data.items.map((item) => (
                    <File key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default File;

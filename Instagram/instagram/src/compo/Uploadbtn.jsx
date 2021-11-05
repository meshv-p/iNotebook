import React,{useState , useEffect} from 'react'

export const Uploadbtn = () => {
    const [file, setFile] = useState(null);
   const handleChange= (e)=> {
        setFile(URL.createObjectURL(e.target.files[0]));
      }

      useEffect(() => {
       handleChange.bind(this)
      }, [])
    return (
      <div>
        <input type="file" onChange={handleChange}/>
        <img src={file} alt="" />
      </div>
    );
}

import React from 'react'

const Users = (props) => {
    let dat = props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center",fontWeight:"bolder"}}>
            <tr>
                <th>Actor name</th>
                <th>DOB</th>
                <th>Movies</th>
                <th>Age</th>
                <th>Photo</th>
            </tr>
            {dat.map((x)=>{
                return (
                    <tr>
                    <td>{x.actorname}</td>
                    <td>{x.dob}</td>
                    <td>{x.movies}</td>
                    <td>{x.age}</td>
                    <td><img src={x.photo} style={{height:"100px",width:"100px"}}/></td>
                    </tr>
                )
                // <td>{img src ={x.photo}alt="" style={{height="50px",width="50px"}}</td>
            })}
        </table>
</div>
  )
}

export default Users
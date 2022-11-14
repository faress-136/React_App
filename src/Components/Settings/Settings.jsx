import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Settings() {
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-md-3">
            <ul>
                <li>
                    <Link to="application">Application</Link>
                </li>
                <li>
                    <Link to="personal">Personal</Link>
                </li>
            </ul>
        </div>

        <div className="col-md-9">
            <Outlet></Outlet>
        </div>
    </div>
   </div>
   </>
  )
}

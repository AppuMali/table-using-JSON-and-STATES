import React from "react";
import { Component } from "react";
import JSON from "./users.json" 
import Users from "./Components/Users";
class TableApp extends Component
{
    constructor()
    {
        super()
        this.state ={
            json : JSON
        }
    }
    render()
    {
        return(
            <div>
            <Users data ={this.state.json} />
            </div>
        )
    }
}
export default TableApp;
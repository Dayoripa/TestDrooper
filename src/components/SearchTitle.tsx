import e from "express";
import { useState } from "react"
import { Movie } from "./interface/MovieInterface";

type FormElement = React.FormEvent<HTMLFormElement>


export const SearchTitle = () =>{

    return(
        <section className="py-4 container d-flex justify-content-center">
            <input className="form-control form-control-lg"
            style={{width:"85%"}}
             type="text" placeholder="Search movie" aria-label=".form-control-lg example"></input>
       </section>
    )
}
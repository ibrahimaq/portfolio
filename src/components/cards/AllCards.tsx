import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../Button";
import Card from "./Card";

interface IAllCards {
    data: Queries.ContentfulBlog[]
}
const AllCards = ({data}: IAllCards) => {
   

    return ( 
        // Desktop cards in a row
        <>
        {data && 
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {data.map((cardData, i) => {
                return (
                    <Card key={i} data={cardData} />
                )
            })}
        </div>
        }
        </>
     );
}
 
export default AllCards;


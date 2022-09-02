import React from "react";
import { ProductDropDown } from "./ProductDropDown";
import './DropDownProduct.css'



const DropDownProduct = () => {
    return (
        <ul className="product-submenu">
            {ProductDropDown.map((item, index) => {
                return (
                    <li key={index}>
                    <a className={item.cName} href={item.url}>{item.title}<br></br>{item.texs}
                    </a>
                </li>
                )
            })}
        </ul>
    )
}


export default DropDownProduct;
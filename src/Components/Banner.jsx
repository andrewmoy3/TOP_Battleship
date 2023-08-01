import React from "react";
import '../css/Banner.css'

export default function Banner(){
    return (
        <div className="banner" id="banner">
            <div id="signature" data-testid="signature">Made by Andrew Moy</div>
            <div id="title" data-testid='title'>Battleship</div>
        </div>
    )
}
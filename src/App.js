import React from "react";
import "./App.css"


const App =()=>{
    return(
        <>
        <div>
        <body>
            <h1 className="heading_style">Flight Search Engine</h1>
            <form>
            < div className="form_border">
                Name:<input type="text" size="40" /><br /><br/>
                Origin City:<input type="text" size="40" /><br /><br />
                Destination City:<input type="text" size="40" /><br /><br />
                Departure Date:<select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>

                <select>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>March</option>
                </select>

                <select>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                </select><br /><br />

               
                Return Date:<select>
                    <option>5</option>
                    <option>9</option>
                    <option>10</option>
                    <option>15</option>
                </select>

                <select>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>March</option>
                </select>

                <select>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                </select><br /><br />

                Departure Time:<input type = "time"/><br/><br />
                Arrival Time:<input type = "time"/><br/><br />
                Price: <input type = "text"/><br/>   <br />
                <input type="Button" value="Search" />
                </div>
            </form>   
        </body>
        </div>
        </>
    )
}

export default App;




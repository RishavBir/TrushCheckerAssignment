
import React from "react";
import ReactDOM from "react-dom"


ReactDOM.render(
    <>
        <body>
            <h1>Flight Search Engine</h1>
            <form>
                Name:<input type="text" size="40" /><br />
                Origin City:<input type="text" size="40" /><br />
                Destination City:<input type="text" size="40" /><br />  
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
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                </select><br />

               
                Return Date:<select>
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
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                </select><br />

                Departure Time:<input type = "time"/><br/>
                Arrival Time:<input type = "time"/><br/>
                Price: <input type = "text"/><br/>
                
                <input type="Button" value="Search" />



            </form>
        </body>
    </>,
    document.getElementById("root")
)
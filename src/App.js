import React from "react";
import "./App.css"


const App = () => {
    return (
        <>
                <body>
                    <div className="heading_style">
                    <h1>Flight Search Engine</h1>
                    </div>
                    <form>
                        <div className="formStyle">
                                Name:<input type="text" size="40" /><br /><br />
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

                                Journey Type:<input type="radio" name="r1" />One-Way
                                <input type="radio" name="r1" />Both <br /><br />
                                Arrival Time:<input type="time" /><br /><br />
                                Price: <input type="text" /><br /><br />
                                <input type="Button" value="Search" /><br /><br />
                            </div>
                         </form>
                                    <div className="inside_style">
                                        <h5>Pune >> Delhi >> Pune &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Departure Time:<input type="time" /></h5>
                                    </div> 
                                    
                </body>
           
        </>
    )
}

export default App;




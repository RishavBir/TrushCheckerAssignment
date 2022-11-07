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
                        <div className="formStyle"><br></br>
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
                                        <h5>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;Pune >> Delhi >> Pune &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Departure Time:<input type="time"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Return Time:<input type="time" /></h5>
                                    </div> 
                                    <div className="inside_style2">
                                        <h5>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;Rs 9200.00</h5>
                                        <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;PUNJ > DEL &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEL > PUNJ</p>
                                        <div className="inside_style3">
                                            <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.livemint.com%2Fimg%2F2022%2F05%2F26%2F1600x900%2Fb5117f96-7169-11ec-8f17-311f48466dc2_1644217958646_1653545781352.jpg&imgrefurl=https%3A%2F%2Fwww.livemint.com%2Fmarket%2Fmark-to-market%2Fwhy-indigo-s-shares-are-flying-despite-weak-q4-results-11653545655381.html&tbnid=-a9Tj7kq0l3AVM&vet=12ahUKEwjjtIPuoJv7AhX0gmMGHVFnAzMQMygBegUIARDdAQ..i&docid=1zRJBeM7cacNrM&w=1600&h=900&q=indigo%20flight%20pics&ved=2ahUKEwjjtIPuoJv7AhX0gmMGHVFnAzMQMygBegUIARDdAQ" target ="hs">Click here</a><br/><br/>
                                        <input type="Button" value="Book This Flight" />
                                        </div>   
                                        </div>                   
                                    
                </body>
           
        </>
    )
}

export default App;




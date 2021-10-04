import React, { useState } from 'react';

export default function Article(props) {
    const [input, setInput] = useState('');
    const [Alert, setAlert] = useState("Welcome to TextUtils.");


    var onchange = (event) => {
        setInput(event.target.value);
        var l = input.length;
        console.log(l);
    }
    var Upper = () => {
        var txt = document.getElementById('txt').value;
        var u = txt.toUpperCase();
        setInput(u);
        setAlert('Your text has been converted into Upper case successfully.');

        // console.log(u);
    }
    var Lower = () => {
        var txt = document.getElementById('txt').value;
        var u = txt.toLowerCase();
        setInput(u);
        setAlert('Your text has been converted into Lower case successfully.');
        // console.log(u);
    }
    var Replace = () => {
        var f = prompt('Which word you want to changed?/find');
        console.log(f);
        console.log(input.includes(f));
        if (input.includes(f)) {
            var r = prompt('what word to be replaced?/Replace');
            console.log(r);
            var c = input.replace(f, r);
            console.log(c);
            setInput(c);
            setAlert(`Your ${f} has been replcaed ${r} successfully.`)
        }
        else {
            alert(`Your ${f} is not in this.`);
            setAlert(`Your ${f} is not in this.`);
        }
    }
    var Clear = () => {
        setInput("");
        setAlert('Clear Text has been successfully.');
    }
    var Copy = () => {
        navigator.clipboard.writeText(input);
        setAlert('Your text has been copied.');
    }
    var Space = () => {
        let newText = input.split(/[ ]+/);
        setInput(newText.join(" "));
        setAlert('Remove Extra space has been Removed successfully.');
    }

    return (
        <>
            <div className={`text-${props.mode === "light" ? 'dark' : "light"}  `} style={{backgroundColor : `${props.mode === 'light'? 'white':'#485460'}` , height : '100vh'}}>
            <div className="alert alert-success alert-dismissible fade show mb-0" role="alert">
                <strong>{Alert}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
                <div className="container ">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label m-lg-1">Your Text:</label>
                        <textarea className={`form-control text-${props.mode === "light" ? 'dark' : "light"}`} style={{backgroundColor : `${props.mode === 'light'? 'white':'#485460'}`}} value={input} placeholder="Type here..." onChange={onchange} id="txt" type="text" rows="3"></textarea>
                    </div>
                    <button className="btn btn-outline-success mx-2" disabled={input.length === 0} type="submit" onClick={Upper}>UpperCase</button>
                    <button className="btn btn-outline-primary mx-2" disabled={input.length === 0} type="submit" onClick={Lower}>LowerCase</button>
                    <button className="btn btn-outline-danger mx-2 " disabled={input.length === 0} type="submit" onClick={Replace}>Find & Replace</button>
                    <button className="btn btn-outline-warning mx-2" disabled={input.length === 0} type="submit" onClick={Copy}>Copy Text</button>
                    <button className="btn btn-outline-info  mx-2" disabled={input.length === 0} type="submit" onClick={Clear}>Clear Text</button>
                    <button className="btn btn-outline-secondary mx-2" disabled={input.length === 0} type="submit" onClick={Space}>Remove Extra spaces</button>



                    <div className="container mt-lg-4">
                        <h2 className="text-start m-lg-1">Preview:</h2>
                        <span className="mx-lg-5 border-bottom border-dark" id="preview">{input.length > 0 ? input : "Nothing to show here"}</span>
                        <div className="mt-1">
                            <span><b>Total Word:</b></span>
                            <span id="word"> {input.length} Words</span>
                        </div>
                        <div className="mt-1">
                            <span><b>Total Characters:</b></span>
                            <span id="length"> {input.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Word</span>
                        </div>
                        <div className="mt-1">
                            <span><b>Time For Reading:</b></span>
                            <span id="time"> {0.008 * input.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

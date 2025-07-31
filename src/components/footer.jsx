import React from "react";
function Footer(){
    return(
        <div id="about" style={styles.footer}>
            <p>© 2025 Eyewear Inc. | Contact: <a href="google.com">eyewear@tt.com</a></p>
        </div>
    );
}
const styles={
    footer:{
        background:"black",
        color:"white",
        width:"auto",
        height:"50px",
        textAlign:"center",
        justifyContent:"center",
        padding:"20px"
    },
}
export default Footer;
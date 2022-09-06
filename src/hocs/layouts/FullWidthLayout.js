import { connect } from "react-redux";

import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Alert from "components/navigation/alerts/alert";

const FullWidthLayout = ({children}) =>{
    return(
    
        <>
        <Navbar/>
        {children} 
        <Footer/>
        <Alert/>
        </>
    )
}


const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(FullWidthLayout);
import { connect } from "react-redux";

import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Alert from "components/alerts/alert";

const FullWidthLayout = ({children}) =>{
    return(
    
        <>
        <Navbar/>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </div>
        <Footer/>
        <Alert/>
        </>
    )
}


const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(FullWidthLayout);
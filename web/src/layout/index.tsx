import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer";
import styled from "styled-components";
import Spinner from "../widgets/Loader";

const AppBackground = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    background: #f2f2f2;
`;

const AppContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;


const Layout = ({children}:any) =>{
    return (
        <AppBackground>
            <Header />
                <AppContent>{children}</AppContent>
            <Footer />
        </AppBackground>
    )
}

export default Layout;

import QuestionPage from "./QuestionPage";
import {useState} from "react";
import {Header} from "./Components/Header";
import LeftBar from "./Components/Left-Bar";


const CABINET = 0;
const SELF_MARK = 1;
const QUESTION_PAGE = 2;

const Layout = () => {
    const [selectedPage, setSelectedPage] = useState(QUESTION_PAGE);

    return (
        <div>
            <Header></Header>
            <LeftBar></LeftBar>
            {selectedPage === CABINET && null }
            {selectedPage === SELF_MARK && null }
            {selectedPage === QUESTION_PAGE && <QuestionPage/> }
        </div>
    )
}

export default Layout;
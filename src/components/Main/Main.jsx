import MainSactionHow from "../MainSactionHow/MainSactionHow";
import MainSactionOur from "../MainSactionOur/MainSactionOur";
import MainSactionPartner from "../MainSactionPartner/MainSactionPartner";
import MainSectionTopfooter from "../MainSectionTopfooter/MainSectionTopfooter";
import MainSectionWhy from "../MainSectionWhy/MainSectionWhy";
import "./Main.css"

function Main() {
    return (
        <>
            <Main>
                <MainSectionWhy />
                <MainSactionPartner />
                <MainSactionOur />
                <MainSactionHow />
                <MainSectionTopfooter />
            </Main>
        </>
    )

}
export default Main;
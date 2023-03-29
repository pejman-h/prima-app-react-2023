import MainSactionHow from "../MainSactionHow/MainSactionHow";
import MainSactionOur from "../MainSactionOur/MainSactionOur";
import MainSactionPartner from "../MainSactionPartner/MainSactionPartner";
import MainSectionTopfooter from "../MainSectionTopfooter/MainSectionTopfooter";
import MainSectionWhy from "../MainSectionWhy/MainSectionWhy";
import "./Main.css"

function Main() {
    return (
        <>
            <main>
                <MainSectionWhy />
                <MainSactionPartner />
                <MainSactionOur />
                <MainSactionHow />
                <MainSectionTopfooter />
            </main>
        </>
    )

}
export default Main;
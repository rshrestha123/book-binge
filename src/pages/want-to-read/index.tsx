import PageContainer from "@/components/page-container";
import MainContainer from "@/components/main-container";

export default function WantToRead() {
    console.log("WantToRead");
    return (
        <MainContainer>
            <PageContainer title={"Want to read"}>
                Reading list
            </PageContainer>
        </MainContainer>
    );
}
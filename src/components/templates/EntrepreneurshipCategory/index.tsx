import { styled } from "@mui/styles";
import  Footer from "../../organisms/Footer/index";
import { HeaderComponent } from "../../organisms/Header/index";


export interface EntrepreneurshipProps {
    
    sizes: React.ReactNode;
    trendingBlinks: React.ReactNode;
    justAddedBlinks: React.ReactNode;
    featuredBlinks: React.ReactNode;
    banner: React.ReactNode;
}

let BodyContainer = styled("div")({
    width: 912,
    position: 'relative',
    left: 480
})

// let BlinksContainer = styled("div")({
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     position: 'relative',
//     top: 184,
//     left: 25
// })

let SearchContainer = styled("div") ({
    position: 'relative',
    top: 104,
    left: 25
})

let TrendingBlinks = styled("div") ({
    position: 'relative',
    top: 184,
    left: 25
})

let JustAddedBlinks = styled("div") ({
    position: 'relative',
    top: 280,
    left: 25
})

let FeaturedBlinks = styled("div") ({
    position: 'relative',
    top: 376,
    left: 25
})

let FooterWrap = styled("div") ({
    position: 'relative',
    minHeight: '100vh',
    top: 500
})

export const Entrepreneurship = (props: EntrepreneurshipProps) => {
    let { sizes, trendingBlinks, justAddedBlinks, banner, featuredBlinks} = props
    return (
        <>
            <HeaderComponent/>
            <BodyContainer>
                {banner}
                <SearchContainer>
                {sizes}
                </SearchContainer>
                <TrendingBlinks>
                {trendingBlinks}
                </TrendingBlinks>
                <JustAddedBlinks>
                {justAddedBlinks}
                </JustAddedBlinks>
                <FeaturedBlinks>
                {featuredBlinks}
                </FeaturedBlinks>
            </BodyContainer>
            <FooterWrap>
            <Footer/>
            </FooterWrap>
            
        </>
    )
}
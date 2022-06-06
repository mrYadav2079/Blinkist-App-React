import { Story } from "@storybook/react";
import { Banner } from "../../molecules/Banner";
import Categories from "../../organisms/BookCategories";
import { Entrepreneurship, EntrepreneurshipProps } from ".";
import Library from "../../../data/Library"
import Sizes from "../../organisms/SearchBarFunction/index";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Templates/Entrepreneurship',
    component: Entrepreneurship
}

let Template: Story<EntrepreneurshipProps> = args => <MemoryRouter><Entrepreneurship {...args} /></MemoryRouter>

export const EntrepreneurshipPage = Template.bind({})
EntrepreneurshipPage.args = {
    banner: <Banner />,
    sizes: <Sizes setTitle/>,
    trendingBlinks: <Categories data={Library} ftitle='' status="trending" />,
    featuredBlinks: <Categories data={Library} ftitle='' status="featured" />,
    justAddedBlinks: <Categories data={Library} ftitle='' status="justAdded" />,
}
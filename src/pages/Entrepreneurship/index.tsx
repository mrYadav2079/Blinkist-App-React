import { Banner } from '../../components/molecules/Banner'
import {SearchBarComponent} from '../../components/molecules/SearchBar/index'
import Categories from '../../components/organisms/BookCategories'

import {Entrepreneurship} from '../../components/templates/EntrepreneurshipCategory/index'
import Library from '../../data/Library'

const EntrepreneurshipPage = () => {
    return (
        <>
        <Entrepreneurship 
       
        banner={<Banner />}
        
        searchBar={<SearchBarComponent />}
        trendingBlinks={
            <Categories data={Library}
            status="trending" />
        }
        justAddedBlinks={
            <Categories data={Library}
            status="justAdded" />
        }
        featuredBlinks={
            <Categories data={Library}
            status="featured" />
        } />
        </>
    )
}

export default EntrepreneurshipPage
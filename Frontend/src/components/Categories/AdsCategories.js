import { useEffect, useContext } from 'react'
import AdsItem from './AdsItem'
import contextValue from '../../context/categories/categoriesContext'
import '../../styles/Categories.css'

const Skeleton = () => (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
        <div className="category-card" style={{ pointerEvents: 'none' }}>
            <div className="category-card-img-wrap" style={{ background: '#f3f4f6' }} />
            <div className="category-card-body">
                <div style={{ height: 14, background: '#e5e7eb', borderRadius: 6, marginBottom: 8 }} />
                <div style={{ height: 20, width: 60, background: '#e5e7eb', borderRadius: 20, margin: '0 auto' }} />
            </div>
        </div>
    </div>
);

export default function Categories() {
    const { categories, mainCategories } = useContext(contextValue);

    useEffect(() => {
        mainCategories();
    }, []);

    const loading = categories.length === 0;

    return (
        <section className="sptb" style={{ background: '#f8f9fc' }}>
            <div className="container">

                <div className="cat-section-header">
                    <h2>Browse All Categories</h2>
                    <p>Discover thousands of ads across all categories</p>
                </div>

                <div className="row">
                    {loading
                        ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
                        : categories.map((element) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={element.cat_id}>
                                <AdsItem
                                    cat_name={element.cat_name}
                                    imgurl={element.cat_img}
                                    cat_url={`ads/category/${element.cat_name}`}
                                    adscount={element.adscount}
                                />
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    );
}
